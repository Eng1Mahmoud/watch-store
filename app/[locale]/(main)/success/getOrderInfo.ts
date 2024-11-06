import { axiosServerInstance } from "@/axios/axiosInstance";

export const getOrderInfo = async (session_id: string) => {
  const response = await axiosServerInstance.get(
    `/payments/stripe/checkout-data/${session_id}`,
  );
  return response.data;
};
