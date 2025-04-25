import { Context } from "hono";
import { findAllUsers } from "../services/user.service";

export const getAllUsers = async (c: Context) => {
  const users = await findAllUsers();
  return c.json(users);
};
