"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export const getUser = async () => {
  const response = await axiosServerInstance.get("/users/current");
  return response.data;
};
