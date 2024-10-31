import { toast } from "react-toastify";
import { IProduct } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useRouter } from "@/i18n/routing";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
export const useAddProduct = () => {
  const router = useRouter();
  const queryClient = getQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: IProduct) => {
      // add category type to the values object
      let finalValues = { ...values, category_type: "name" };
      return axiosClientInstance.post("/products", finalValues);
    },
    onSuccess: ({ data }) => {
      if (data.success) {
        toast.success(data.message);
        router.push("/admin/products");
        queryClient.invalidateQueries({ queryKey: ["products"] });
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
