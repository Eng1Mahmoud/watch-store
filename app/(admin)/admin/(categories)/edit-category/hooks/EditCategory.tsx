import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { useState } from "react";
import { toast } from "react-toastify";
import { ICategory } from "@/types/types";
import { useRouter } from "next/navigation";
export const useEditCategory = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (
    values: ICategory,
    { resetForm }: { resetForm?: () => void },
  ) => {
    setLoading(true);

    await apiRequest<any>({
      endpoint: `/categories/${values.name}?type=name`,
      method: "PATCH",
      data: values,
      token: getTokenClient(),
    })
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          router.push("/admin/categories");
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
