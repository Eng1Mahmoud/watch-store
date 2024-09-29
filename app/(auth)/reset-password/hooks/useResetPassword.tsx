import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
interface ResetPasswordValues {
  password: string;
  confirmPassword: string;
}
export const useResetPassword = (token: string) => {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: ResetPasswordValues) => {
      return axiosClientInstance.post(`/auth/reset-password/${token}`, values);
    },
    onSuccess: ({ data }) => {
      if (data.success) {
        toast.success(data.message);
        router.push("/login");
      } else {
        toast.error(data.message[0]);
      }
    },
    onError: (error: any) => {
      toast.error(error.response.data.message[0]);
    },
  });

  const onSubmit = async (values: ResetPasswordValues) => {
    mutate(values);
  };
  return { onSubmit, loading: isPending };
};
