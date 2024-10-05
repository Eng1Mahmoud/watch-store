"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export const getProduct = async (id: string) => {
  const response = await axiosServerInstance.get(`/products/${id}`);
  return response;
};
