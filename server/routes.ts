import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, phone, message } = req.body;
      
      // Basic validation
      if (!name || !phone || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // Validate phone number
      const phonePattern = /^[0-9]{10,15}$/;
      if (!phonePattern.test(phone.replace(/\D/g, ""))) {
        return res.status(400).json({ message: "Invalid phone number format" });
      }
      
      // Parse and validate the data using our schema
      const validatedData = insertContactFormSchema.parse({ name, phone, message });
      
      // Store the contact form submission in the database
      const submission = await storage.submitContactForm(validatedData);
      
      console.log("Contact form submission saved:", {
        id: submission.id,
        name: submission.name,
        timestamp: submission.createdAt
      });
      
      // Success response
      return res.status(200).json({ 
        message: "Contact form submitted successfully",
        success: true,
        submissionId: submission.id
      });
      
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Get all contact form submissions (could be protected in a real app)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactFormSubmissions();
      return res.status(200).json(submissions);
    } catch (error) {
      console.error("Error retrieving contact submissions:", error);
      return res.status(500).json({ 
        message: "An error occurred while retrieving contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
