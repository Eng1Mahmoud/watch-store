"use client";
import { setCookie } from "cookies-next";
import { decodeToken } from "@/utils/decodeToken";
import { useRouter } from "@/i18n/routing";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/user";
import { useCart } from "@/utils/cart";
import { useFilter } from "./filters";
// Define the function to handle account configuration
export const usePrepareAccountConfig = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loadCartFromLocalStorage } = useCart();
  const { loadFilterFromLocalStorage } = useFilter();

  const prepareAccountConfig = (token: string) => {
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && typeof decodedToken !== "string") {
        const { exp, id, role } = decodedToken;
        if (exp) {
          // Set token expiration in cookies
          const expDate = new Date(exp * 1000);
          setCookie("token", token, { expires: expDate });

          // Set user in Redux
          dispatch(setUser({ login: true, id }));

          // Load the user's cart from localStorage
          loadCartFromLocalStorage({ id });

          // Load the user's filter from localStorage
          loadFilterFromLocalStorage({ id });

          // Navigate based on role
          if (role === "admin") {
            router.push("/dashboard");
          } else {
            router.push("/");
          }
        }
      }
    }
  };

  return { prepareAccountConfig };
};
