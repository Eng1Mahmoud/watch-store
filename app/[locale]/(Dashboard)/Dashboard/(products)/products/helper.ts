import { useRouter } from "@/i18n/routing";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useTranslations } from "next-intl";
export const useColumns = () => {
  const t = useTranslations("products.tableLabels");
  return [
    {
      key: "name",
      label: t("name"),
    },
    {
      key: "image_url",
      label: t("image"),
    },
    {
      key: "price",
      label: t("price"),
    },
    {
      key: "quantity",
      label: t("quantity"),
    },
    {
      key: "categories",
      label: t("category"),
    },
  ];
};

export const useGetActions = () => {
  const t = useTranslations("products.tableLabels");
  const queryClient = getQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async (userId: string) => {
      const response = await axiosClientInstance.delete(`/products/${userId}`);
      return response.data;
    },
    onSuccess: (data: any) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
  });
  const router = useRouter();
  return [
    {
      label: t("edit"),
      icon: CiEdit,
      className: "text-main-main dark:text-dark-textAction",
      onClick: (product: any) => {
        router.push(`/dashboard/edit-product/${product.id}` as any);
      },
    },
    {
      label: t("delete"),
      icon: MdDelete,
      className: "text-error-main",
      onClick: async (product: any) => {
        deleteMutation.mutate(product.id);
      },
    },
  ];
};
