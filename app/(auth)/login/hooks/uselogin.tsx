import { usePrepareAccountConfig } from "@/utils/prepareAccountConfig";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { axiosClientInstance } from "@/axios/axiosClientInstance";

interface LoginFormValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { prepareAccountConfig } = usePrepareAccountConfig();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: LoginFormValues) =>
      axiosClientInstance.post("/auth/signin", values),
    onSuccess: ({ data }) => {
      const {
        data: { token },
        success,
        message,
      } = data;

      if (success) {
        toast.success(message);
        prepareAccountConfig(token); // Use the prepareAccountConfig function
      } else {
        toast.error(message);
      }
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    mutate(values);
  };

  return { onSubmit, loading: isPending };
};
