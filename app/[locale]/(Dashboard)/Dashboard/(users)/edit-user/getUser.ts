"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export const getUser = async (id: string) => {
  const response = await axiosServerInstance.get(`/users/${id}`);
  return response.data;
};
