import { prisma } from "../lib/prisma";
import { User } from "../models/user.model";

export const getUsersFromDB = async () => {
  return await prisma.user.findMany();
};
