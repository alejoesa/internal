import { jwt, verify } from "hono/jwt";
import { Context, MiddlewareHandler, Next } from "hono";

export const authMiddleware: MiddlewareHandler = jwt({
  secret: process.env.JWT_SECRET!,
});

export const adminMiddleware = async (c: Context, next: Next) => {
  const authHeader = await c.req.header("Authorization")?.replace("bearer", "");
  const token = authHeader!.toString();

  if (!token) {
    return c.json({ error: "Missing token" }, 401);

    try {
      const decoded = await verify(token, process.env.JWT_SECRET!);
      const email = decoded.email;

      c.set("email", email);
    } catch (error) {
      return c.json({ Error: "invalid token" }, 401);
    }
  }
};
