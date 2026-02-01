const express = require("express");
const { z } = require("zod");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Contact form validation schema
const insertContactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContact: z.string().optional(),
  isConsultation: z.boolean().optional(),
});

// Contact form route - dummy endpoint for demo purposes
app.post("/contact", async (req, res) => {
  try {
    const input = insertContactMessageSchema.parse(req.body);
    // Just validate and return success - no database storage for this demo
    console.log("Contact form submission received:", input);
    res.json({ 
      success: true, 
      message: "Thank you for reaching out! We'll contact you soon." 
    });
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

// Catch all other routes
app.all("*", (req, res) => {
  res.status(404).json({ message: "API route not found" });
});

module.exports = app;
