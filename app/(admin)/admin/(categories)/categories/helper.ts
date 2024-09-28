import { useRouter } from "next/navigation";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
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
  const queryClient = getQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (itemName: string) => {
      const token = getTokenClient();
      return apiRequest({
        endpoint: `/categories/${itemName}?type=name`,
        method: "DELETE",
        token,
      });
    },
    onSuccess: (data: any) => {
      if (data.success) {
        toast.success("Category deleted successfully");
        queryClient.invalidateQueries({
          queryKey: ["categories", "categories-home"],
        }); // revalidate categories in table
        queryClient.invalidateQueries({ queryKey: ["categories-home"] }); // revalidate categories in home
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error("An error occurred while deleting the category");
    },
  });

  return [
    {
      label: "Edit",
      onClick: (item: any) => {
        router.push(`/admin/edit-category/${item.name}`);
      },
    },
    {
      label: "Delete",
      onClick: (item: any) => {
        deleteMutation.mutate(item.name);
      },
    },
  ];
};
