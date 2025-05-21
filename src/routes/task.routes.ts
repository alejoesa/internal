import { Hono } from "hono";
import { adminMiddleware, authMiddleware } from "../middleware/auth.middleware";
import { getAllTasks } from "../controllers/task.controller";

const taskRoutes = new Hono();

taskRoutes.get("/", authMiddleware, adminMiddleware, getAllTasks);

export default taskRoutes;
