import { Hono } from "hono";
import {
  getAllUsers,
  getUserById,
  registerUser,
} from "../controllers/user.controller";

const privateUserRoutes = new Hono();
privateUserRoutes.get("/", getAllUsers);
privateUserRoutes.get("/:id", getUserById);

const publicUserRoutes = new Hono();
publicUserRoutes.post("/", registerUser);

export { publicUserRoutes, privateUserRoutes };
