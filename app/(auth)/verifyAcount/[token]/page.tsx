import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import LoadingScreenContent from "../ui/LoadingScreenContent";

const page = () => {
  return (
    <div>
      <LoadingScreen
        LoadingScreenContent={LoadingScreenContent}
        hiddenDialog={false}
      />
    </div>
  );
};

export default page;
