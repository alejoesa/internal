import { Context } from "hono";
import {
  createUser,
  findAllUsers,
  findUniqueUser,
} from "../services/user.service";
import { createUserSchema } from "../schemas/user.schema";

export const getAllUsers = async (c: Context) => {
  const filter = await c.req.query("email");
  const users = await findAllUsers(filter || "");
  return c.json(users);
};

export const getUserById = async (c: Context) => {
  const user = await findUniqueUser(c.req.param("id"));
  return c.json(user, 200);
};

export const registerUser = async (c: Context) => {
  try {
    const body = await c.req.json();
    const validatedData = createUserSchema.parse(body);
    const newUser = await createUser(validatedData);
    return c.json(newUser, 201);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return c.json({ error: error.message }, 400);
    }
    return c.json({ error: "Internal server error" }, 500);
  }
};
