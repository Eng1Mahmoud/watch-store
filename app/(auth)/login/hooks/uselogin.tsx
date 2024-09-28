import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { decodeToken } from "@/utils/decodeToken";
import { setCookie } from "cookies-next";
import { setUser } from "@/redux/features/user";
import { useAppDispatch } from "@/redux/hooks";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
interface LoginFormValues {
  email: string;
  password: string;
}
export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: LoginFormValues) =>
      axiosClientInstance.post("/auth/signin", values),
    onSuccess: ({ data }) => {
      const {
        data: { token },
      } = data;
      if (data.success) {
        dispatch(setUser(true));
        toast.success(data.message);
        // set token in cookies
        const decodedToken = decodeToken(token);
        if (decodedToken && typeof decodedToken !== "string") {
          const { exp, role } = decodedToken;
          if (exp) {
            const expDate = new Date(exp * 1000);
            setCookie("token", token, { expires: expDate });
            if (role === "admin") {
              router.push("/admin");
            } else {
              router.push("/");
            }
          }
        }
      } else {
        toast.error(data.message);
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
