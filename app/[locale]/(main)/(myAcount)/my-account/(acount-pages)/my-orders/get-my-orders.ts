import { axiosServerInstance } from "@/axios/axiosServerInstance";

export const getMyOrders = async () => {
  const response = await axiosServerInstance.get(`/orders/current`);
  return response.data;
};
