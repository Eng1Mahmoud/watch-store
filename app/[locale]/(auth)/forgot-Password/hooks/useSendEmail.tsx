import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
interface sendEmailProps {
  email: string;
}
export const useSendEmail = () => {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (values: sendEmailProps) => {
      return axiosClientInstance.post("/auth/forget-password", values);
    },
  });
  const onSubmit = async (values: sendEmailProps) => {
    mutate(values);
  };
  return { onSubmit, successSend: isSuccess, loading: isPending };
};
