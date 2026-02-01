import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form route - dummy endpoint for demo purposes
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      // Just validate and return success - no database storage for this demo
      console.log("Contact form submission received:", input);
      res.json({ success: true, message: "Thank you for reaching out! We'll contact you soon." });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("Contact form error:", err);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  return httpServer;
}
