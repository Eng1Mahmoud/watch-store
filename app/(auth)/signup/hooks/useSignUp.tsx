import { toast } from "react-toastify";
import { useState } from "react";
import { apiRequest } from "@/apiRequests/fetch";
export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  interface SignUpFormValues {
    username: string;
    email: string;
    password: string;
  }

  const onSubmit = async (
    values: SignUpFormValues,
    { resetForm }: { resetForm?: () => void },
  ) => {
    setLoading(true);
    try {
      const response = await apiRequest<any>({
        endpoint: "/auth/signup",
        method: "POST",
        data: values,
      });
      console.log(response);

      if (response.success) {
        toast.success(response.message);
        setSuccess(true);
        if (resetForm) {
          resetForm();
        }
        // You might want to store the token or redirect the user here
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

  return { onSubmit, loading, success };
};
