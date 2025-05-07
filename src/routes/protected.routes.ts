import { Hono } from "hono";
import { authMiddleware } from "../middleware/auth.middleware";
import { privateUserRoutes } from "./user.routes";

const protectedRoutes = new Hono();

protectedRoutes.use("*", authMiddleware);
protectedRoutes.route("/users", privateUserRoutes);

export default protectedRoutes;
