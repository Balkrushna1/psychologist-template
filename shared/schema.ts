import { z } from "zod";

// Contact form validation schema (no database in this demo)
export const insertContactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContact: z.string().optional(),
  isConsultation: z.boolean().optional(),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

