import { Hono } from "hono";
import { loginController } from "../controllers/auth.controller";

const authRoutes = new Hono();

authRoutes.post("/", loginController);

export default authRoutes;
