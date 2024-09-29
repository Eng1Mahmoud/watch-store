"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export const getCategory = async (name: string) => {
  const response = await axiosServerInstance.get(
    `/categories/${name}?type=name`,
  );
  return response;
};
