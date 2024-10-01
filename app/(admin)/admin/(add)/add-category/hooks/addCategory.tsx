import { toast } from "react-toastify";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { ICategory } from "@/types/types";
import { useRouter } from "next/navigation";
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
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["categories"] }); // revalidate categories in table
        queryClient.invalidateQueries({ queryKey: ["categories-home"] }); // revalidate categories in home
        router.push("/admin/categories"); // redirect to categories page
      } else {
        toast.error(data.message);
      }
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message);
    },
  });
  const onSubmit = async (values: ICategory) => {
    mutate(values);
  };

  return { onSubmit, loading: isPending };
};
