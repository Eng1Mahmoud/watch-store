import { useRouter } from "next/navigation";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
export const columns = [
  {
    key: "username",
    label: "Username",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "phone",
    label: "Phone",
  },
  {
    key: "role",
    label: "Role",
  },
];

export const useGetActions = () => {
  const queryClient = getQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async (userId: string) => {
      const token = getTokenClient();
      return apiRequest({
        endpoint: `/users/${userId}`,
        method: "DELETE",
        token,
      });
    },
    onSuccess: (data: any) => {
      if (data.success) {
        toast.success("User deleted successfully");
        queryClient.invalidateQueries({ queryKey: ["users"] });
      } else {
        toast.error(data.message);
      }
    },
  });
  const router = useRouter();
  return [
    {
      label: "Edit",
      onClick: (user: any) => {
        router.push(`/admin/edit-user/${user.id}`);
      },
    },
    {
      label: "Delete",
      onClick: async (user: any) => {
        deleteMutation.mutate(user.id);
      },
    },
  ];
};
