import axiosInstance from "@/axios/axiosInstance";
interface ContactUsProps {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}
export const useContactUs = () => {
  const onSubmit = async (
    values: ContactUsProps,
    { resetForm }: { resetForm?: () => void },
  ) => {
    if (resetForm) {
      resetForm();
    }
  };
  return { onSubmit };
};
