import { useRouter } from "@/i18n/routing";
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
        router.push("/login");
      }
    },
  });

  const onSubmit = async (values: ResetPasswordValues) => {
    mutate(values);
  };
  return { onSubmit, loading: isPending };
};
