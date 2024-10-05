import { toast } from "react-toastify";
import { IProduct } from "@/types/types";
import { useRouter } from "next/navigation";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
export const useEditProduct = ({ id }: { id: string }) => {
  const router = useRouter();
  const queryClient = getQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: IProduct) => {
      const response = await axiosClientInstance.patch(
        `/products/${id}`,
        values,
      );
      return response.data;
    },
    onSuccess: (res) => {
      if (res.success) {
        toast.success(res.message);
        router.push("/admin/products");
        queryClient.invalidateQueries({ queryKey: ["products"] });
        queryClient.invalidateQueries({ queryKey: ["productDetails"] });
      } else {
        toast.error(res.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (values: IProduct) => {
    mutate(values);
  };
  return { onSubmit, loading: isPending };
};
