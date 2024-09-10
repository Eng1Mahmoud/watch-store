import { apiRequest } from "@/apiRequests/fetch";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface ResetPasswordValues {
  password: string;
  confirmPassword: string;
}
export const useResetPassword = (token: string) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onSubmit = async (
    values: ResetPasswordValues,
    { resetForm }: { resetForm?: () => void },
  ) => {
    setLoading(true);
    apiRequest({
      endpoint: `/auth/reset-password/${token}`,
      method: "POST",
      data: values,
    })
      .then((res: any) => {
        if (res.success) {
          toast.success("Password reset successfully");
          if (resetForm) {
            resetForm();
          }
          router.push("/login");
        }
        console.log(res);
        toast.error(res.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { onSubmit, loading };
};
