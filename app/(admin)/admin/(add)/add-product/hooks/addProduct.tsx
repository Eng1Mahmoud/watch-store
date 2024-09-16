import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { useState } from "react";
import { toast } from "react-toastify";
import { IProduct } from "@/types/types";
export const useAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (
    values: IProduct,
    { resetForm }: { resetForm?: () => void },
  ) => {
    console.log(values);
    setLoading(true);

    await apiRequest<any>({
      endpoint: "/products",
      method: "POST",
      data: values,
      token: getTokenClient(),
    })
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
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
