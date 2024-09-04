import React from "react";
import ShowDialog from "@/components/ShowDialog";
import LoadingScreenContent from "../ui/LoadingScreenContent";
import { sendToken } from "./sendToken";
import SaveToken from "./SaveToken";
import { notFound } from "next/navigation";
const page = async ({ params }: { params: { token: string } }) => {
  const response = await sendToken(params.token);
  if (!response.success) return notFound();
  return (
    <div>
      <SaveToken token={response?.data?.token} />
      <ShowDialog Content={LoadingScreenContent} hiddenDialog={false} />
    </div>
  );
};

export default page;
