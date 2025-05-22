import { prisma } from "../lib/prisma";
import { createTaskDto } from "../schemas/task.schema";

export const getTaskFromDB = async (filter: string) => {
  const isAdmin = await prisma.user.findFirst({
    where: {
      email: filter,
    },
    select: {
      isAdmin: true,
    },
  });

  if (!isAdmin) {
    throw new Error("Unauthorized: Contact an admin");
  }

  // Filtrar por correo para traerse solo las tareas de ese, si viene vacio entonces las del mismo usuario

  if (filter !== "") {
    return await prisma.task.findMany({
      where: {
        userOwner: {
          email: filter,
        },
      },
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
      },
    });
  }
  return await prisma.task.findMany();
};

export const createTaskinDb = async (data: createTaskDto) => {
  const task = await prisma.task.create({
    data,
  });
};
