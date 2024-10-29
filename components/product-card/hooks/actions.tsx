import { useRouter } from "@/i18n/routing";
import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { toast } from "react-toastify";
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
export const useProductWishlistActions = () => {
  const queryClient = getQueryClient();
  // add product to wishlist
  const addWishlistMutation = useMutation({
    mutationFn: (product_id: string | undefined) =>
      axiosClientInstance.post(`/wishlists/current`, {
        product_id,
      }),
    onSuccess: ({ data }) => {
      if (data.success) {
        toast.success("Product added to wishlist");
        queryClient.invalidateQueries({ queryKey: ["products"] }); // invalidate products
        queryClient.invalidateQueries({ queryKey: ["wishlists"] }); // invalidate wishlists
        queryClient.invalidateQueries({ queryKey: ["productDetails"] }); // invalidate product details
      } else {
        toast.error("Product already in wishlist");
      }
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
  // remove product from wishlist
  const removeWishlistMutation = useMutation({
    mutationFn: (product_id: string | undefined) =>
      axiosClientInstance.delete(`/wishlists/current/${product_id}`),
    onSuccess: ({ data }) => {
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["products"] }); // invalidate products
        queryClient.invalidateQueries({ queryKey: ["wishlists"] }); // invalidate wishlists
        queryClient.invalidateQueries({ queryKey: ["productDetails"] }); // invalidate product details
      } else {
        toast.error(data.message);
      }
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
  const addProductToWishlist = (product_id: string | undefined) => {
    addWishlistMutation.mutate(product_id);
  };
  const removeProductFromWishlist = (product_id: string | undefined) => {
    removeWishlistMutation.mutate(product_id);
  };
  return { addProductToWishlist, removeProductFromWishlist };
};
