import { Hono } from "hono";
import {
  getAllUsers,
  getUserById,
  registerUser,
} from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const userRoutes = new Hono();
userRoutes.get("/", authMiddleware, getAllUsers);
userRoutes.get("/:id", authMiddleware, getUserById);

userRoutes.post("/", registerUser);

export default userRoutes;
