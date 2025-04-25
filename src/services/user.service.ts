import { getUsersFromDB } from "../respositories/user.repository";

export const findAllUsers = async () => {
  return await getUsersFromDB();
};
