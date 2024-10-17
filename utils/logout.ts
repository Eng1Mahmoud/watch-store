import { setUser } from "@/redux/features/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteCookie } from "cookies-next";
import { useCart } from "./cart";
import { useCallback } from "react";

export const useLogout = () => {
  const userId = useAppSelector((state) => state.user.id);
  const { saveCartToLocalStorage } = useCart();
  const dispatch = useAppDispatch();

  const logout = useCallback(() => {
    saveCartToLocalStorage({ id: userId });
    dispatch(setUser({ login: false, id: "" }));
    deleteCookie("token");
  }, [userId, saveCartToLocalStorage, dispatch]);

  return { logout };
};
