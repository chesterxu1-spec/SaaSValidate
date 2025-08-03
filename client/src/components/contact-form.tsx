import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

const formSchema = insertContactInquirySchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  startupIdea: z.string().min(10, "Please provide a brief description of your startup idea"),
  projectDetails: z.string().min(20, "Please provide more details about your project"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      startupIdea: "",
      projectDetails: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      
      // Track Meta Pixel Lead event
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Send Details - Contact Form',
          content_category: 'Validation Request',
          currency: 'USD',
          value: 3000
        });
      }
      
      if (data.emailSent) {
        toast({
          title: "Message Sent!",
          description: "Your inquiry has been sent to chester.xu1@gmail.com. We'll contact you within 24 hours.",
        });
      } else {
        toast({
          title: "Message Received!",
          description: "Your inquiry was saved but email delivery failed. We'll still contact you within 24 hours.",
          variant: "destructive",
        });
      }
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              We've received your validation request and will contact you within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="glass-card"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Validate Your Idea?</h2>
          <p className="text-xl text-gray-600">
            Let's discuss your startup and create a custom validation strategy
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-900">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          className="p-4 rounded-xl border border-gray-200"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-900">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your@email.com" 
                          className="p-4 rounded-xl border border-gray-200"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="startupIdea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-900">Startup Idea</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Brief description of your SaaS idea" 
                        className="p-4 rounded-xl border border-gray-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-900">Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={4}
                        placeholder="Tell us more about your project and validation goals..." 
                        className="p-4 rounded-xl border border-gray-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  size="lg"
                  className="bg-gray-900 text-white px-12 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 text-lg"
                >
                  {mutation.isPending ? "Sending..." : "Send Details"}
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Your details will be sent to chester.xu1@gmail.com. We'll respond within 24 hours.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
