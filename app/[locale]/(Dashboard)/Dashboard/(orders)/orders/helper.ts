import { useRouter } from "@/i18n/routing";

import { CiEdit } from "react-icons/ci";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("orders.tableLabels");
  const router = useRouter();
  return [
    {
      label: t("open"),
      icon: CiEdit,
      labelColor: "text-main-main dark:text-dark-textAction",
      onClick: (order: any) => {
        router.push(`/dashboard/orders/${order?.id}` as any);
      },
    },
  ];
};
