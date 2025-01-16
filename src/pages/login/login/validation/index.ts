import { z } from 'zod';

export const validationSchema = z.object({
  identifier: z
    .string()
    .nonempty('Username or Email is required'), // nonempty() -> required
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters') // min() -> for minimum length
    .nonempty('Password is required')})
