import { useRouter } from "@/i18n/routing";
import { useMutation } from "@tanstack/react-query";
import { BiSolidShow } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { useTranslations } from "next-intl";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
export const useColumns = () => {
  const t = useTranslations("orders.tableLabels");
  return [
    {
      key: "created_at",
      label: t("createdAt"),
    },
    {
      key: "status",
      label: t("status"),
    },
    {
      key: "user[username]",
      label: t("client"),
    },
  ];
};

export const useGetActions = () => {
  const queryClient = getQueryClient();
  const t = useTranslations("orders.tableLabels");
  const cancelOrderMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosClientInstance.patch(`/orders/current/${id}`);
      return response.data;
    },
    onSuccess: (data: any, id: string) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["user-order-details", id] });
        queryClient.invalidateQueries({ queryKey: ["orders"] });
      }
    },
  });
  const router = useRouter();
  return [
    {
      label: t("open"),
      icon: BiSolidShow,
      labelColor: "text-main-main dark:text-dark-textAction",
      onClick: (order: any) => {
        router.push(`/my-account/my-orders/${order?.id}` as any);
      },
    },
    {
      label: t("cancel"),
      icon: MdCancel,
      labelColor: "text-error-main",
      onClick: (order: any) => {
        cancelOrderMutation.mutate(order?.id);
      },
    },
  ];
};
