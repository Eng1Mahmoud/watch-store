import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { decodeToken } from "@/utils/decodeToken";
import { toast } from "react-toastify";
import { setUser } from "@/redux/features/user";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
export const useTokenExpiration = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const checkTokenExpiration = () => {
      const token = getCookie("token");
      if (!token) {
        dispatch(setUser(false));
        return;
      }

      const { exp }: any = decodeToken(token as string);
      const currentTime = Date.now() / 1000; // Convert to seconds

      if (exp <= currentTime) {
        dispatch(setUser(false));
        router.push("/login");
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
  }, [dispatch, router]);
};
