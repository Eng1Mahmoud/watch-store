import axiosInstance from "@/axios/axiosInstance";
import { toast } from "react-toastify";
export const useLogin = () => {
  interface LoginFormValues {
    email: string;
    password: string;
  }

  const onSubmit = (
    values: LoginFormValues,
    { resetForm }: { resetForm?: () => void },
  ) => {
    console.log(values);
    toast.success("Login Success");
    if (resetForm) {
      resetForm();
    }
    // Handle other props if needed
  };

  return { onSubmit };
};
