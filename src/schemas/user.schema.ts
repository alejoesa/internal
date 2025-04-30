import { password } from "bun";
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;

export const userResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  createAt: z.date(),
  updateAt: z.date(),
});

export type userResponseSchema = z.infer<typeof userResponseSchema>;
