import { hashPassword } from "../lib/hash";
import { prisma } from "../lib/prisma";
import {
  createUserInDb,
  getAnUserFromDb,
  getUsersFromDB,
} from "../respositories/user.repository";
import { CreateUserDto } from "../schemas/user.schema";

export const findAllUsers = async (filter: string) => {
  return await getUsersFromDB(filter);
};

export const findUniqueUser = async (id: string) => {
  return await getAnUserFromDb(id);
};

export const createUser = async (data: CreateUserDto) => {
  const hashedPassword = await hashPassword(data.password);

  const user = await createUserInDb({
    ...data,
    password: hashedPassword,
  });

  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};
