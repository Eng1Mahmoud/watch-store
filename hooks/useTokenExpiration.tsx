import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { decodeToken } from "@/utils/decodeToken";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "@/i18n/routing";
import { useLogout } from "@/utils/logout";
import { useAppSelector } from "@/redux/hooks";
export const useTokenExpiration = () => {
  const { login } = useAppSelector((state) => state.user);
  console.log(login);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { logout } = useLogout();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkTokenExpiration = () => {
      const token = getCookie("token");
      // If there's no token but user is still logged in, force logout
      if (!token && login) {
        logout();
        return;
      }
      // If there's no token and user is not logged in, do nothing
      if (!token && !login) {
        return;
      }

      const decodedToken: any = decodeToken(token as string);
      const currentTime = Date.now() / 1000; // Convert to seconds

      if (decodedToken?.exp <= currentTime) {
        logout();
        toast.error("Your session has expired", {
          toastId: "session-expired",
        });
      } else {
        const timeUntilExpiration = (decodedToken?.exp - currentTime) * 1000; // Convert to milliseconds
        timeoutId = setTimeout(checkTokenExpiration, timeUntilExpiration);
      }
    };

    checkTokenExpiration();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [dispatch, router, logout, login]);
};
