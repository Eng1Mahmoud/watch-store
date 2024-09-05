import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { decodeToken } from "@/utils/decodeToken";
import { toast } from "react-toastify";

export const useTokenExpiration = () => {
  const [isExpired, setIsExpired] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkTokenExpiration = () => {
      const token = getCookie("token");
      if (!token) {
        setIsExpired(true);
        return;
      }

      const { exp }: any = decodeToken(token as string);
      const currentTime = Date.now() / 1000; // Convert to seconds

      if (exp <= currentTime) {
        if (!isExpired) {
          setIsExpired(true);
          toast.error("Your session has expired", {
            toastId: "session-expired",
          });
        }
      } else {
        setIsExpired(false);
        const timeUntilExpiration = (exp - currentTime) * 1000; // Convert to milliseconds
        timeoutId = setTimeout(checkTokenExpiration, timeUntilExpiration);
      }
    };

    checkTokenExpiration();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isExpired]);

  return isExpired;
};
