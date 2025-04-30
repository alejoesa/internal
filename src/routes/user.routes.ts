import { Hono } from "hono";
import {
  getAllUsers,
  getUserById,
  registerUser,
} from "../controllers/user.controller";

const userRoutes = new Hono();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:id", getUserById);
userRoutes.post("/", registerUser);

export default userRoutes;
