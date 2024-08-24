import React from "react";
import ShowDialog from "@/components/ShowDialog";
import LoadingScreenContent from "../ui/LoadingScreenContent";
import ResetPasswordForm from "../ui/ResetPasswordForm";
const page = () => {
  return (
    <div>
      <ResetPasswordForm />
      <ShowDialog Content={LoadingScreenContent} hiddenDialog={false} />
    </div>
  );
};

export default page;
