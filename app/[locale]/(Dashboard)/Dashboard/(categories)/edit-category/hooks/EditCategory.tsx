import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
import { ICategory } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@/i18n/routing";

export const useEditCategory = ({
  oldCategoryName,
}: {
  oldCategoryName: string;
}) => {
  const queryClient = getQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: ICategory) => {
      return axiosClientInstance.patch(
        `/categories/${oldCategoryName}?type=name`,
        values,
      );
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

/* import { ICategory } from "@/types/types";
import { useRouter } from "@/i18n/routing";
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
        router.push("/dashboard/categories");
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        queryClient.invalidateQueries({
          queryKey: ["categoryDetails", oldCategoryName],
        });
      }
    },
  });
  const onSubmit = async (values: ICategory) => {
    mutate(values);
  };
  return { onSubmit, loading: isPending };
};
 */
