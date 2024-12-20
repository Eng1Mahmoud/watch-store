import { setUser } from "@/redux/features/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteCookie } from "cookies-next";
import { useCart } from "./cart";
import { useFilter } from "./filters";
import { useCallback } from "react";
import { useRouter } from "@/i18n/routing";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
export const useLogout = () => {
  const queryClient = getQueryClient();
  // invalidate all queries after new login to get data for new user
  queryClient.invalidateQueries();
  const userId = useAppSelector((state) => state.user.id);
  const { saveCartToLocalStorage } = useCart();
  const { saveFilterToLocalStorage } = useFilter();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const logout = useCallback(() => {
    saveCartToLocalStorage({ id: userId }); // save cart to localStorage to get it later after login
    saveFilterToLocalStorage({ id: userId }); // save filter to localStorage to get it later after login
    dispatch(setUser({ login: false, id: "" }));
    deleteCookie("token");
    router.push("/");
  }, [
    userId,
    saveCartToLocalStorage,
    saveFilterToLocalStorage,
    dispatch,
    router,
  ]);

  return { logout };
};
