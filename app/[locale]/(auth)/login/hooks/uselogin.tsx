import { usePrepareAccountConfig } from "@/utils/prepareAccountConfig";
import { useMutation } from "@tanstack/react-query";
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
      } = data;

      if (success) {
        prepareAccountConfig(token); // Use the prepareAccountConfig function
      }
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    mutate(values);
  };

  return { onSubmit, loading: isPending };
};
