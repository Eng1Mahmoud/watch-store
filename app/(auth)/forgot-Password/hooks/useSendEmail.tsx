import { useState } from "react";
import { apiRequest } from "@/apiRequests/fetch";
import { toast } from "react-toastify";
interface sendEmailProps {
  email: string;
}

export const useSendEmail = () => {
  const [successSend, setsuccessSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (
    values: sendEmailProps,
    { resetForm }: { resetForm?: () => void },
  ) => {
    setLoading(true);
    try {
      const response = await apiRequest<any>({
        endpoint: "/auth/forget-password",
        method: "POST",
        data: values,
      });
      if (response.success) {
        toast.success(response?.message);
        setsuccessSend(true);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      // show error message
      toast.error((error as Error)?.message || "An error occurred");
    } finally {
      if (resetForm) {
        resetForm();
      }
      setLoading(false);
    }
  };
  return { onSubmit, successSend, loading };
};
