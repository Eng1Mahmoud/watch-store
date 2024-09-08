import React from "react";
import ResetPasswordForm from "../ui/ResetPasswordForm";
import { AuthResetPassword } from "../actions/AuthResetPassword";
import { notFound } from "next/navigation";
const page = async ({ params }: { params: { token: string } }) => {
  const response: any = await AuthResetPassword({ token: params.token });
  console.log(response);
  if (!response.success) return notFound();
  return (
    <div>
      <ResetPasswordForm />
      {/*   <ShowDialog Content={LoadingScreenContent} hiddenDialog={false} /> */}
    </div>
  );
};

export default page;
