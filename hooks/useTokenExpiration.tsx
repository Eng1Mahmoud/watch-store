import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { decodeToken } from "@/utils/decodeToken";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "@/i18n/routing";
import { useLogout } from "@/utils/logout";
export const useTokenExpiration = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { logout } = useLogout();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkTokenExpiration = () => {
      const token = getCookie("token");
      if (!token) {
        return;
      }

      const { exp }: any = decodeToken(token as string);
      const currentTime = Date.now() / 1000; // Convert to seconds

      if (exp <= currentTime) {
        logout();
        toast.error("Your session has expired", {
          toastId: "session-expired",
        });
      } else {
        const timeUntilExpiration = (exp - currentTime) * 1000; // Convert to milliseconds
        timeoutId = setTimeout(checkTokenExpiration, timeUntilExpiration);
      }
    };

    checkTokenExpiration();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [dispatch, router, logout]);
};
