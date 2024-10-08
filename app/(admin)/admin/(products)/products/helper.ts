import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
export const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "image_url",
    label: "Image",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "quantity",
    label: "Quantity",
  },
  {
    key: "categories",
    label: "Category",
  },
];

export const useGetActions = () => {
  const queryClient = getQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async (userId: string) => {
      const response = await axiosClientInstance.delete(`/products/${userId}`);
      return response.data;
    },
    onSuccess: (data: any) => {
      if (data.success) {
        toast.success("Product deleted successfully");
        queryClient.invalidateQueries({ queryKey: ["products"] });
      } else {
        toast.error(data.message);
      }
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
  const router = useRouter();
  return [
    {
      label: "Edit",
      onClick: (product: any) => {
        router.push(`/admin/edit-product/${product.id}`);
      },
    },
    {
      label: "Delete",
      onClick: async (product: any) => {
        deleteMutation.mutate(product.id);
      },
    },
  ];
};
