import { password } from "bun";
import { prisma } from "../lib/prisma";
import { CreateUserDto, userResponseSchema } from "../schemas/user.schema";

export const getUsersFromDB = async () => {
  return await prisma.user.findMany({
    omit: {
      password: true,
    },
  });
};

export const getAnUserFromDb = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
    omit: {
      password: true,
    },
  });
};

export const createUserInDb = async (data: CreateUserDto) => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};
