import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
interface sendEmailProps {
  email: string;
}
export const useSendEmail = () => {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (values: sendEmailProps) => {
      return axiosClientInstance.post("/auth/forget-password", values);
    },
    onSuccess: ({ data }) => {
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (values: sendEmailProps) => {
    mutate(values);
  };
  return { onSubmit, successSend: isSuccess, loading: isPending };
};
