import React from "react";
import ShowDialog from "@/components/ShowDialog";
import LoadingScreenContent from "../ui/LoadingScreenContent";
import { sendToken } from "./sendToken";
import SaveToken from "./SaveToken";
import { notFound } from "next/navigation";
import { QueryClient } from "@tanstack/react-query";

const page = async ({ params }: { params: { token: string } }) => {
  const queryClient = new QueryClient();

  try {
    const { data } = await queryClient.fetchQuery({
      queryKey: ["verifyEmail"],
      queryFn: () => sendToken(params.token),
    });
    const token = data?.data?.token;

    return (
      <div>
        <SaveToken token={token} />
        <ShowDialog Content={LoadingScreenContent} hiddenDialog={false} />
      </div>
    );
  } catch (error) {
    return notFound();
  }
};

export default page;
