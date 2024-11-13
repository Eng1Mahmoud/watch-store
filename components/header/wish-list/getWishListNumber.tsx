import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useQuery } from "@tanstack/react-query";

export const useGetWishListNumber = () => {
  const { data } = useQuery({
    queryKey: ["wishlist-number"],
    queryFn: () => axiosClientInstance.get("/others/numbers"),
  });
  return data?.data?.data?.wishlists;
};
