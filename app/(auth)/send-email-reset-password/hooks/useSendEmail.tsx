import axiosInstance from "@/axios/axiosInstance";
import { useState } from "react";
interface sendEmailProps {
  email: string;
}

export const useSendEmail = () => {
  const [successSend, setsuccessSend] = useState(false);
  const onSubmit = async (
    values: sendEmailProps,
    { resetForm }: { resetForm?: () => void },
  ) => {
    // toast.success("Login Success");
    if (resetForm) {
      resetForm();
    }
  };
  return { onSubmit, successSend };
};
