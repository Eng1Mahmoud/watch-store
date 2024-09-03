import axiosInstance from "@/axios/axiosInstance";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
export const useLogin = () => {
  interface LoginFormValues {
    email: string;
    password: string;
  }

  const onSubmit = (
    values: LoginFormValues,
    { resetForm }: { resetForm?: () => void },
  ) => {
    axiosInstance
      .post("/auth/login", values)
      .then((res) => {
        console.log(res);
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed");
        setCookie("token", "hello");
      })
      .finally(() => {
        resetForm && resetForm();
      });
  };

  return { onSubmit };
};
