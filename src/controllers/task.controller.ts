import { Context } from "hono";
import { findAllTasks } from "../services/task.service";

export const getAllTasks = async (c: Context) => {
  const filter = await findAllTasks(c.get("email"));
};
