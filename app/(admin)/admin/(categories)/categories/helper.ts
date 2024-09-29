import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
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
      const response = await axiosClientInstance.delete(
        `/categories/${itemName}?type=name`,
      );
      return response.data;
    },
    onSuccess: (data: any) => {
      if (data.success) {
        console.log(data);
        toast.success("Category deleted successfully");
        queryClient.invalidateQueries({ queryKey: ["categories"] }); // revalidate categories in table
        queryClient.invalidateQueries({ queryKey: ["categories-home"] }); // revalidate categories in home
      } else {
        toast.error(data.message);
      }
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
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
