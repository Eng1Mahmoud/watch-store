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
      <span className="badge badge-lg indicator-item border-none text-text-third dark:text-dark-text bg-main-main dark:bg-dark-bgSection p-2 shadow-input dark:shadow-dark">
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
