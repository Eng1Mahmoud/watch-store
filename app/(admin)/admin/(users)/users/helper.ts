import { useRouter } from "next/navigation";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { revalidate } from "@/actions/revalidatTage";
import { toast } from "react-toastify";
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
        const token = getTokenClient();
        await apiRequest({
          endpoint: `/users/${user.id}`,
          method: "DELETE",
          token,
        })
          .then((response: any) => {
            if (response.success) {
              revalidate(["get-all-users"]);
              toast.success("User deleted successfully");
            } else {
              toast.error(response.message);
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      },
    },
  ];
};
