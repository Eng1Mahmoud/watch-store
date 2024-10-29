import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
interface SaveInfoData {
  username: string;
  email: string;
  phone: string;
}
export const useSaveUserData = () => {
  const queryClient = getQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: SaveInfoData) => {
      const response = await axiosClientInstance.patch(
        "/users/current",
        values,
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["user"] });
      } else {
        toast.error(data.message);
      }
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (values: SaveInfoData) => {
    mutate(values);
  };
  return { onSubmit, loading: isPending };
};
