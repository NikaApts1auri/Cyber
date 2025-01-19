import { z } from "zod";

export const validationSchema = z.object({
  identifier: z
    .string()
    .email({ message: "Please enter a valid email address." }) // Email format check
    .min(1, { message: "Email is required." }),  // Required check
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters." }),
});
