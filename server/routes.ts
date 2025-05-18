import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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
      
      // In a real-world scenario, you might:
      // 1. Store the contact in a database
      // 2. Send an email notification
      // 3. Integrate with a CRM
      
      // For this example, we'll just log the submission
      console.log("Contact form submission:", {
        name,
        phone, 
        message,
        timestamp: new Date().toISOString()
      });
      
      // Success response
      return res.status(200).json({ 
        message: "Contact form submitted successfully",
        success: true
      });
      
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
