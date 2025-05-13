import { getTaskFromDB } from "../respositories/task.repository";

export const findAllTasks = async (filter: string) => {
  return await getTaskFromDB(filter);
};
