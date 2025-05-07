import { Context } from "hono";
import { loginSchema } from "../schemas/auth.schema";
import { loginUser } from "../services/auth.service";

export const loginController = async (c: Context) => {
  const body = await c.req.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return c.json({ error: "Datos invalidos" }, 400);
  }

  try {
    const { token } = await loginUser(parsed.data.email, parsed.data.password);
    return c.json({ token });
  } catch (error) {
    return c.json({ error: "Email or password are incorrect" }, 401);
  }
};
