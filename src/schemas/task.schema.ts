import { z } from "zod";

export const createTaskSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  description: z.string().nullable().optional(),
});

export type createTaskDto = z.infer<typeof createTaskSchema>;
