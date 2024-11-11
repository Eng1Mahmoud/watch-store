import { useRouter } from "@/i18n/routing";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useTranslations } from "next-intl";
export const useColumns = () => {
  const t = useTranslations("categories-admin.tableLabels");
  return [
    {
      key: "name",
      label: t("name"),
    },
    {
      key: "cover_url",
      label: t("image"),
    },
  ];
};

export const useGetActions = () => {
  const t = useTranslations("categories-admin.tableLabels");
  const router = useRouter();
  const queryClient = getQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (itemName: string) => {
      const response = await axiosClientInstance.delete(
        `/categories/${itemName}?type=name`,
      );
      return response.data;
    },
    onSuccess: (data: any) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["categories"] }); // revalidate categories in table
        queryClient.invalidateQueries({ queryKey: ["categories-home"] }); // revalidate categories in home
        queryClient.invalidateQueries({ queryKey: ["categories-selectBox"] }); // revalidate categories for select box
      }
    },
  });

  return [
    {
      label: t("edit"),
      icon: CiEdit,
      labelColor: "text-main-main dark:text-dark-textAction",
      onClick: (item: any) => {
        router.push(`/dashboard/edit-category/${item.name}` as any);
      },
    },
    {
      label: t("delete"),
      icon: MdDelete,
      labelColor: "text-error-main",
      onClick: (item: any) => {
        deleteMutation.mutate(item.name);
      },
    },
  ];
};
