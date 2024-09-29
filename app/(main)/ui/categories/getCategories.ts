"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export const getCategories = async (page: number, limit: number) => {
  const response = await axiosServerInstance(
    `/categories?page=${page}&limit=${limit}`,
  );
  return response.data;
};
