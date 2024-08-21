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
    console.log(values);
    // toast.success("Login Success");
    if (resetForm) {
      resetForm();
    }
  };
  return { onSubmit };
};
