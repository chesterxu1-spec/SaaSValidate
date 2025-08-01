import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Email content for chester.xu1@gmail.com
      const emailContent = `
New SaaS Validation Inquiry:

Name: ${validatedData.name}
Email: ${validatedData.email}
Startup Idea: ${validatedData.startupIdea}
Project Details: ${validatedData.projectDetails}

Submitted at: ${new Date().toISOString()}
      `.trim();

      console.log("New contact inquiry received:");
      console.log(emailContent);
      console.log("This inquiry should be sent to: chester.xu1@gmail.com");
      
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
