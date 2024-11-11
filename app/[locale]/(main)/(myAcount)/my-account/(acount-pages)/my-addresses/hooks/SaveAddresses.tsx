import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
interface SaveAddresses {
  country: string;
  city: string;
  state: string;
  street: string;
  zipcode: string;
}
export const useSaveAddresses = () => {
  const queryClient = getQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: SaveAddresses) => {
      const data = {
        addresses: [values],
      };
      const response = await axiosClientInstance.patch("/users/current", data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });
  const onSubmit = async (values: SaveAddresses) => {
    mutate(values);
  };
  return { onSubmit, loading: isPending };
};
