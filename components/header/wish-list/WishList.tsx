"use client";
import { useAppSelector } from "@/redux/hooks";
import WishlistsUI from "./WishlistsUI";
const WishList = () => {
  const isLoging = useAppSelector((state) => state.user.login);
  return isLoging ? <WishlistsUI /> : null;
};

export default WishList;
