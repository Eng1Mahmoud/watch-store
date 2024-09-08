import { apiRequest } from "@/apiRequests/fetch";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { decodeToken } from "@/utils/decodeToken";
import { setCookie } from "cookies-next";
import { setUser } from "@/redux/features/user";
import { useAppDispatch } from "@/redux/hooks";
export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  interface LoginFormValues {
    email: string;
    password: string;
  }

  const onSubmit = async (
    values: LoginFormValues,
    { resetForm }: { resetForm?: () => void },
  ) => {
    setLoading(true);
    try {
      const response = await apiRequest<any>({
        endpoint: "/auth/signin",
        method: "POST",
        data: values,
      });
      if (response.success) {
        // set user state
        dispatch(setUser(true));
        toast.success(response?.message);
        if (resetForm) {
          resetForm();
        }
        // set token in cookies
        const decodedToken = decodeToken(response?.data?.token);
        if (decodedToken && typeof decodedToken !== "string") {
          const { exp } = decodedToken;
          if (exp) {
            const expDate = new Date(exp * 1000);
            setCookie("token", response?.data?.token, { expires: expDate });
          }
        }

        // redirect to home page
        router.push("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { onSubmit, loading };
};
