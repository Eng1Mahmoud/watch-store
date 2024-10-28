"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export const getWishLists = async (page: number, limit: number) => {
  const response = await axiosServerInstance(
    `/wishlists/current?page=${page}&limit=${limit}`,
  );
  return response.data;
};
