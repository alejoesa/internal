import { Hono } from "hono";
import { getAllUsers } from "../controllers/user.controller";

const userRoutes = new Hono();

userRoutes.get("/", getAllUsers);

export default userRoutes;
