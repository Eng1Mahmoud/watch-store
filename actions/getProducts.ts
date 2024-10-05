"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export const getProducts = async () => {
  const response = await axiosServerInstance.get("/products?page=1&limit=20");
  return response.data;
};
