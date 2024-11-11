import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { ICategory } from "@/types/types";
import { useRouter } from "@/i18n/routing";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
import { useMutation } from "@tanstack/react-query";
export const useAddCategory = () => {
  const queryClient = getQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: ICategory) => {
      return axiosClientInstance.post("/categories", values);
    },
    onSuccess: ({ data }) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["categories"] }); // revalidate categories in table
        queryClient.invalidateQueries({ queryKey: ["categories-home"] }); // revalidate categories in home
        queryClient.invalidateQueries({ queryKey: ["categories-selectBox"] }); // revalidate categories for select box
        router.push("/dashboard/categories"); // redirect to categories page
      }
    },
  });
  const onSubmit = async (values: ICategory) => {
    mutate(values);
  };

  return { onSubmit, loading: isPending };
};
