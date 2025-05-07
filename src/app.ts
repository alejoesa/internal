import { Hono } from "hono";
import { privateUserRoutes, publicUserRoutes } from "./routes/user.routes";
import protectedRoutes from "./routes/protected.routes";
import authRoutes from "./routes/auth.routes";

const app = new Hono();

app.route("/users", publicUserRoutes);
app.route("/login", authRoutes);
privateUserRoutes.route("/", protectedRoutes);

export default app;
