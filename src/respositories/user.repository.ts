import { password } from "bun";
import { prisma } from "../lib/prisma";
import { CreateUserDto } from "../schemas/user.schema";

export const getUsersFromDB = async (filter: string) => {
  if (filter !== "") {
    return await prisma.user.findMany({
      where: {
        email: filter,
      },
      omit: {
        password: true,
      },
    });
  }
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

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    omit: {
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};
