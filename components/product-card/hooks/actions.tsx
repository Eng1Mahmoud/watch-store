import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { toast } from "react-toastify";
import { useAppSelector } from "@/redux/hooks";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
// add product to cart
export const useProductCardActions = () => {
  const router = useRouter();
  const goToProductPage = (productId: string | undefined) => {
    router.push(`/shop/${productId}`);
  };
  return { goToProductPage };
};

// add product to wishlist
export const useProductCardWishlistActions = () => {
  const queryClient = getQueryClient();
  const { id } = useAppSelector((state) => state.user);
  const mutation = useMutation({
    mutationFn: (product_id: string | undefined) =>
      axiosClientInstance.post(`/wishlists/current`, {
        user_id: id,
        product_id,
      }),
    onSuccess: ({ data }) => {
      if (data.success) {
        toast.success("Product added to wishlist");
        queryClient.invalidateQueries({ queryKey: ["products"] });
      } else {
        toast.error("Product already in wishlist");
      }
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
  const addProductToWishlist = (product_id: string | undefined) => {
    mutation.mutate(product_id);
  };
  return { addProductToWishlist };
};
