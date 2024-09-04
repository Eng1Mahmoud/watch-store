import axiosInstance from "@/axios/axiosInstance";
interface ResetPasswordValues {
  password: string;
  confirmPassword: string;
}
export const useResetPassword = () => {
  const onSubmit = async (
    values: ResetPasswordValues,
    { resetForm }: { resetForm?: () => void },
  ) => {
    // toast.success("Login Success");
    if (resetForm) {
      resetForm();
    }
  };
  return { onSubmit };
};
