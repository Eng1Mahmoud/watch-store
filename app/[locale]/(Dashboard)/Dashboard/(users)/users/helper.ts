import { useRouter } from "@/i18n/routing";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useTranslations } from "next-intl";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export const useColumns = () => {
  const t = useTranslations("users.tableLabels");
  return [
    {
      key: "username",
      label: t("username"),
    },
    {
      key: "email",
      label: t("email"),
    },
    {
      key: "phone",
      label: t("phone"),
    },
    {
      key: "role",
      label: t("role"),
    },
  ];
};

export const useGetActions = () => {
  const t = useTranslations("users.tableLabels");
  const queryClient = getQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async (userId: string) => {
      const response = await axiosClientInstance.delete(`/users/${userId}`);
      return response.data;
    },
    onSuccess: (data: any) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      }
    },
  });
  const router = useRouter();
  return [
    {
      label: t("edit"),
      icon: CiEdit,
      labelColor: "text-main-main dark:text-dark-textAction",
      onClick: (user: any) => {
        router.push(`/dashboard/edit-user/${user.id}` as any);
      },
    },
    {
      label: t("delete"),
      icon: MdDelete,
      labelColor: "text-error-main ",
      onClick: async (user: any) => {
        deleteMutation.mutate(user.id);
      },
    },
  ];
};
