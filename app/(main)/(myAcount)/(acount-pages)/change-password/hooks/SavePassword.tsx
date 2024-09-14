import { toast } from "react-toastify";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { useState } from "react";
import { revalidate } from "@/actions/revalidatTage";
interface SavePasswordData {
  username: string;
  email: string;
  phone: string;
}
export const useSavePassword = () => {
  const [loading, setLoading] = useState(false);
  const token = getTokenClient();
  const onSubmit = async (values: SavePasswordData) => {
    setLoading(true);

    await apiRequest<any>({
      endpoint: "/users/current/password",
      method: "PATCH",
      data: values,
      token,
    })
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          revalidate(["get-user"]);
        } else {
          toast.error(res.message);
        }
      })
      .catch(() => {
        toast.error("Error saving user data");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { onSubmit, loading };
};
