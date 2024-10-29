import { toast } from "react-toastify";
import { IUser } from "@/types/types";
import { useRouter } from "@/i18n/routing";
import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
export const useEditUser = ({ id }: { id: string | undefined }) => {
  const router = useRouter();
  const queryClient = getQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: IUser) => {
      const response = await axiosClientInstance.patch(`/users/${id}`, values);
      return response.data;
    },
    onSuccess: (res) => {
      if (res.success) {
        toast.success(res.message);
        router.push("/admin/users");
        queryClient.invalidateQueries({ queryKey: ["users"] }); // refetch users
        queryClient.invalidateQueries({ queryKey: ["userDetails"] }); // refetch user details
      } else {
        toast.error(res.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (values: IUser) => {
    mutate(values);
  };

  return { onSubmit, loading: isPending };
};
