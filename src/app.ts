import { Hono } from "hono";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

const app = new Hono();

app.route("/users", userRoutes);
app.route("/login", authRoutes);

export default app;
