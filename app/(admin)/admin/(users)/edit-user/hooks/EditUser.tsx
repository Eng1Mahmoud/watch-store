import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { useState } from "react";
import { toast } from "react-toastify";
import { IUser } from "@/types/types";
import { useRouter } from "next/navigation";
export const useEditUser = ({ id }: { id: string | undefined }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (
    values: IUser,
    { resetForm }: { resetForm?: () => void },
  ) => {
    console.log(values);
    setLoading(true);
    await apiRequest<any>({
      endpoint: `/users/${id}`,
      method: "PATCH",
      data: values,
      token: getTokenClient(),
    })
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          router.push("/admin/users");
          if (resetForm) {
            resetForm();
          }
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { onSubmit, loading };
};
