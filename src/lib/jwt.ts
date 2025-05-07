import { sign } from "jsonwebtoken";

const JWT_SECRET = Bun.env.JWT_SECRET || "dumbo";

export const generateToken = (payload: object) => {
  return sign(payload, JWT_SECRET, { expiresIn: "1h" });
};
