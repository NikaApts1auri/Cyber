import { z } from "zod";

export const validationSchema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().optional(),
});
