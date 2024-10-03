import { toast } from "react-toastify";
import { IProduct } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";

export const useAddProduct = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (values: IProduct) => {
      return axiosClientInstance.post("/products", values);
    },
    onSuccess: ({ data }) => {
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message);
    },
  });
  const onSubmit = async (values: IProduct) => {
    mutate(values);
  };

  return { onSubmit, loading: isPending };
};
