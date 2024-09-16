"use client";
import { setCookie } from "cookies-next";
import { decodeToken } from "@/utils/decodeToken";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/user";
const SaveToken = ({ token }: { token: string }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && typeof decodedToken !== "string") {
        const { exp } = decodedToken;
        if (exp) {
          // Convert the ISO string to a Date object
          const expDate = new Date(exp * 1000);
          setCookie("token", token, { expires: expDate });
          // set user state
          dispatch(setUser(true));
          // redirect to home page
          router.push("/");
        }
      }
    }
  }, [token, router, dispatch]);

  return null;
};

export default SaveToken;
