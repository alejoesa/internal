import { jwt } from "hono/jwt";
import { MiddlewareHandler } from "hono";

export const authMiddleware: MiddlewareHandler = jwt({
  secret: process.env.JWT_SECRET!,
});

export const adminMiddleware = async (params: type) => {};
