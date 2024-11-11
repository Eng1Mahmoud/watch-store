import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
export const useSignUp = () => {
  interface SignUpFormValues {
    username: string;
    email: string;
    password: string;
  }
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (values: SignUpFormValues) => {
      const response = await axiosClientInstance.post("/auth/signup", values);
      return response.data;
    },
  });
  const onSubmit = async (values: SignUpFormValues) => {
    mutate(values);
  };

  return { onSubmit, loading: isPending, success: isSuccess };
};
