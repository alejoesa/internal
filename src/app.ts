import { Hono } from "hono";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";

const app = new Hono();

app.route("/users", userRoutes);
app.route("/login", authRoutes);
app.route("/tasks", taskRoutes);

export default app;
