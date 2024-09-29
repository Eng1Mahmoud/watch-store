import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
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
      const response = await axiosClientInstance.delete(`/users/${userId}`);
      return response.data;
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
