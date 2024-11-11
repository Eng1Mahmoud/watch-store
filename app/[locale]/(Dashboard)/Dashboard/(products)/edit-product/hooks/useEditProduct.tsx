import { IProduct } from "@/types/types";
import { useRouter } from "@/i18n/routing";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
export const useEditProduct = ({ id }: { id: string }) => {
  const router = useRouter();
  const queryClient = getQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: IProduct) => {
      // add category type to the values object
      let finalValues = { ...values, category_type: "name" };
      const response = await axiosClientInstance.patch(
        `/products/${id}`,
        finalValues,
      );
      return response.data;
    },
    onSuccess: (res) => {
      if (res.success) {
        router.push("/dashboard/products");
        queryClient.invalidateQueries({ queryKey: ["products"] });
        queryClient.invalidateQueries({ queryKey: ["productDetails", id] });
      }
    },
  });
  const onSubmit = async (values: IProduct) => {
    mutate(values);
  };
  return { onSubmit, loading: isPending };
};
