import React from "react";
import ShowDialog from "@/components/ShowDialog";
import LoadingScreenContent from "../ui/LoadingScreenContent";

const page = () => {
  return (
    <div>
      <ShowDialog Content={LoadingScreenContent} hiddenDialog={false} />
    </div>
  );
};

export default page;
