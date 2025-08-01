import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Create email transporter
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send email to chester.xu1@gmail.com
      try {
        const transporter = createEmailTransporter();
        
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: "chester.xu1@gmail.com",
          subject: `New SaaS Validation Inquiry from ${validatedData.name}`,
          text: `
New SaaS Validation Inquiry:

Name: ${validatedData.name}
Email: ${validatedData.email}
Startup Idea: ${validatedData.startupIdea}
Project Details: ${validatedData.projectDetails}

Submitted at: ${new Date().toISOString()}
          `.trim(),
          html: `
            <h2>New SaaS Validation Inquiry</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Startup Idea:</strong> ${validatedData.startupIdea}</p>
            <p><strong>Project Details:</strong> ${validatedData.projectDetails}</p>
            <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to chester.xu1@gmail.com");
        
        res.json({ success: true, inquiry, emailSent: true });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Still return success for the inquiry storage, but note email failure
        res.json({ success: true, inquiry, emailSent: false, emailError: "Failed to send email notification" });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        console.error("Server error:", error);
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
