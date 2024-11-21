import { axiosServerInstance } from "@/axios/axiosServerInstance";

export const getOrder = async (id: string) => {
  const response = await axiosServerInstance.get(`/orders/${id}`);
  return response.data;
};
