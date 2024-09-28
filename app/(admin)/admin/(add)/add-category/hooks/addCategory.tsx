import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { useState } from "react";
import { toast } from "react-toastify";
import { ICategory } from "@/types/types";
import { useRouter } from "next/navigation";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
export const useAddCategory = () => {
  const queryClient = getQueryClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (
    values: ICategory,
    { resetForm }: { resetForm?: () => void },
  ) => {
    setLoading(true);

    await apiRequest<any>({
      endpoint: "/categories",
      method: "POST",
      data: values,
      token: getTokenClient(),
    })
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          queryClient.invalidateQueries({ queryKey: ["categories"] }); // revalidate categories in table
          queryClient.invalidateQueries({ queryKey: ["categories-home"] }); // revalidate categories in home
          router.push("/admin/categories"); // redirect to categories page
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
