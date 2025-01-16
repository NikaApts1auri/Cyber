import { z } from 'zod';

// Zod validation schema
export const validationSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters").min(1, "Password is required"),
  repeat_password: z.string()
    .min(1, "Repeat password is required")
    // .superRefine((val, ctx) => {
    //   if (val !== ctx.data.password) {
    //     ctx.addIssue({
    //       code: z.ZodIssueCode.custom,
    //       message: "Passwords must match",
    //       path: ['repeat_password'],
    //     });
    //   }
    // }),
});