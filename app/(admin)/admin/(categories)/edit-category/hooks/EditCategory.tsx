import { toast } from "react-toastify";
import { ICategory } from "@/types/types";
import { useRouter } from "next/navigation";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
export const useEditCategory = ({
  oldCategoryName,
}: {
  oldCategoryName: string;
}) => {
  const router = useRouter();
  const queryClient = getQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: ICategory) => {
      const response = await axiosClientInstance.patch(
        `/categories/${oldCategoryName}?type=name`,
        values,
      );
      return response.data;
    },
    onSuccess: (res) => {
      if (res.success) {
        toast.success(res.message);
        router.push("/admin/categories");
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        queryClient.invalidateQueries({ queryKey: ["categoryDetails"] });
      } else {
        toast.error(res.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (values: ICategory) => {
    mutate(values);
  };
  return { onSubmit, loading: isPending };
};
