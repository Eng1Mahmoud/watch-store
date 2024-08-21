import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import LoadingScreenContent from "../ui/LoadingScreenContent";
import ResetPasswordForm from "../ui/ResetPasswordForm";
const page = () => {
  return (
    <div>
      <ResetPasswordForm />
      <LoadingScreen
        LoadingScreenContent={LoadingScreenContent}
        hiddenDialog={false}
      />
    </div>
  );
};

export default page;
