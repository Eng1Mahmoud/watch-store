import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
import { ICategory } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@/i18n/routing";

export const useAddCategory = () => {
  const queryClient = getQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: ICategory) => {
      return axiosClientInstance.post("/categories", values);
    },
    onSuccess: ({ data }) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        queryClient.invalidateQueries({ queryKey: ["categories-home"] });
        queryClient.invalidateQueries({ queryKey: ["categories-selectBox"] });
        router.push("/dashboard/categories");
      }
    },
  });

  const onSubmit = async (values: ICategory) => {
    mutate(values);
  };

  return { onSubmit, loading: isPending };
};
