import axiosInstance from "@/axios/axiosInstance";
import { toast } from "react-toastify";
import { revalidateTag } from "next/cache";
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
        revalidateTag("user");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed");
      })
      .finally(() => {
        resetForm && resetForm();
      });
  };

  return { onSubmit };
};
