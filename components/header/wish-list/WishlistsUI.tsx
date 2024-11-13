"use client";
import { MdFavoriteBorder } from "react-icons/md";
import { useRouter } from "@/i18n/routing";
import { useGetWishListNumber } from "./getWishListNumber";
const WishlistsUI = () => {
  const router = useRouter();
  const wishlistsNumber = useGetWishListNumber();
  // navigate to wishlists page
  const navigateToWishlists = () => {
    router.push("/wishlists");
  };
  return (
    <div className="indicator" onClick={navigateToWishlists}>
      <span className="badge badge-sm indicator-item">
        {wishlistsNumber > 99 ? "99+" : wishlistsNumber}
      </span>
      <MdFavoriteBorder
        size={35}
        className="text-main-main cursor-pointer dark:text-dark-text"
      />
    </div>
  );
};

export default WishlistsUI;
