import { comparePasswords } from "../lib/hash";
import { generateToken } from "../lib/jwt";
import { findUserByEmail } from "../respositories/user.repository";

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);

  if (!user || !user.password) {
    throw new Error("Invalid credentials");
  }
  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }
  const token = generateToken({
    id: user.id,
    email: user.email,
  });
  return {
    token,
  };
};
