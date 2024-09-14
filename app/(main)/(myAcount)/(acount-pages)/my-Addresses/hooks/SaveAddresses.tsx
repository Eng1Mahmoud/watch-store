import { toast } from "react-toastify";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import { useState } from "react";
import { revalidate } from "@/actions/revalidatTage";
interface SaveAddresses {
  country: string;
  city: string;
  state: string;
  street: string;
  zipcode: string;
}
export const useSaveAddresses = () => {
  const [loading, setLoading] = useState(false);
  const token = getTokenClient();
  const onSubmit = async (values: SaveAddresses) => {
    setLoading(true);
    const data = {
      addresses: [values],
    };
    await apiRequest<any>({
      endpoint: "/users/current",
      method: "PATCH",
      data,
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
