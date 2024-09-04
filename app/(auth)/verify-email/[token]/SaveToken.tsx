"use client";
import { setCookie } from "cookies-next";
import { decodeToken } from "@/utils/decodeToken";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const SaveToken = ({ token }: { token: string }) => {
  const router = useRouter();

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && typeof decodedToken !== "string") {
        const { exp, id } = decodedToken;
        if (exp) {
          // Convert the ISO string to a Date object
          const expDate = new Date(exp * 1000);
          setCookie("token", token, { expires: expDate });
          setCookie("userId", id, { expires: expDate });
          // redirect to home page
          router.push("/");
        }
      }
    }
  }, [token, router]);

  return null;
};

export default SaveToken;
