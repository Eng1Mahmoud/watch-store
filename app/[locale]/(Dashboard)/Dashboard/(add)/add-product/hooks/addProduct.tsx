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
        router.push("/dashboard/products");
        queryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
  });
  const onSubmit = async (values: IProduct) => {
    mutate(values);
  };

  return { onSubmit, loading: isPending };
};
