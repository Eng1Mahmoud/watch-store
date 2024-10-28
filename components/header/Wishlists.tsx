"use client";
import { useAppSelector } from "@/redux/hooks";
import { MdFavoriteBorder } from "react-icons/md";
import { useRouter } from "next/navigation";
const Wishlists = () => {
  const router = useRouter();
  const isLoging = useAppSelector((state) => state.user.login);
  // navigate to wishlists page
  const navigateToWishlists = () => {
    router.push("/wishlists");
  };
  return isLoging ? (
    <div className="indicator" onClick={navigateToWishlists}>
      <span className="badge badge-sm indicator-item"></span>
      <MdFavoriteBorder size={35} className="text-main-main cursor-pointer" />
    </div>
  ) : null;
};

export default Wishlists;
