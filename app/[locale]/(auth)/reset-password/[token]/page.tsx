import ResetPasswordForm from "../ui/ResetPasswordForm";
import { AuthResetPassword } from "../actions/AuthResetPassword";
import { notFound } from "next/navigation";
import { QueryClient } from "@tanstack/react-query";

const page = async ({ params }: { params: { token: string } }) => {
  const queryClient = new QueryClient();
  try {
    const { data } = await queryClient.fetchQuery({
      queryKey: ["reset-password"],
      queryFn: () => AuthResetPassword({ token: params.token }),
    });
    if (!data.success) return notFound();
    return (
      <div>
        <ResetPasswordForm token={params.token} />
      </div>
    );
  } catch (error) {
    return notFound();
  }
};

export default page;
