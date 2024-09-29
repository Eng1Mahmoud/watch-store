import { toast } from "react-toastify";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useMutation } from "@tanstack/react-query";
interface SavePasswordData {
  username: string;
  email: string;
  phone: string;
}
export const useSavePassword = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: SavePasswordData) => {
      const response = await axiosClientInstance.patch(
        "/users/current/password",
        values,
      );
      return response.data;
    },
    onSuccess: (data: any) => {
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
  const onSubmit = async (values: SavePasswordData) => {
    mutate(values);
  };
  return { onSubmit, loading: isPending };
};
