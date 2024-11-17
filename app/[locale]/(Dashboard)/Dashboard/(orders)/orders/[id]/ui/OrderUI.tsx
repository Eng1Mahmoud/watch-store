"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
export const OrderUI = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-order-details", id],
    queryFn: () => axiosClientInstance.get(`/orders/${id}`),
  });
  return <div>{isLoading ? "loading..." : <div>data</div>}</div>;
};
