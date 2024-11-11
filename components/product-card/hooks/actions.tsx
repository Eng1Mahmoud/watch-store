import { useRouter } from "@/i18n/routing";
import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
// add product to cart
export const useProductCardActions = () => {
  const router = useRouter();
  const goToProductPage = (productId: string | undefined) => {
    router.push(`/shop/${productId}` as any);
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
        queryClient.invalidateQueries({ queryKey: ["products"] }); // invalidate products
        queryClient.invalidateQueries({ queryKey: ["wishlists"] }); // invalidate wishlists
        queryClient.invalidateQueries({ queryKey: ["productDetails"] }); // invalidate product details
      }
    },
  });
  // remove product from wishlist
  const removeWishlistMutation = useMutation({
    mutationFn: (product_id: string | undefined) =>
      axiosClientInstance.delete(`/wishlists/current/${product_id}`),
    onSuccess: ({ data }) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["products"] }); // invalidate products
        queryClient.invalidateQueries({ queryKey: ["wishlists"] }); // invalidate wishlists
        queryClient.invalidateQueries({ queryKey: ["productDetails"] }); // invalidate product details
      }
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
