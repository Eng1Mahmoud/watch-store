import { useRouter } from "next/navigation";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { revalidate } from "@/actions/revalidatTage";
import { toast } from "react-toastify";
export const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "cover_url",
    label: "Image",
  },
];

export const useGetActions = () => {
  const router = useRouter();
  return [
    {
      label: "Edit",
      onClick: (item: any) => {
        router.push(`/admin/edit-category/${item.name}`);
      },
    },
    {
      label: "Delete",
      onClick: async (item: any) => {
        const token = getTokenClient();
        await apiRequest({
          endpoint: `/categories/${item.name}?type=name`,
          method: "DELETE",
          token,
        }).then((res: any) => {
          if (res.success) {
            toast.success("Category deleted successfully");
            revalidate(["get-categories"]);
          } else {
            toast.error(res.message);
          }
        });
      },
    },
  ];
};
