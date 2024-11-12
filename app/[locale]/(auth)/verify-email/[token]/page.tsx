import ShowDialog from "@/components/ShowDialog";
import LoadingScreenContent from "../ui/LoadingScreenContent";
import { sendToken } from "./sendToken";
import PreperAcount from "./PreperAcount";
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
      <div className="dark:bg-dark-bgSection dark:text-dark-text">
        <PreperAcount token={token} />
        <ShowDialog Content={LoadingScreenContent} hiddenDialog={false} />
      </div>
    );
  } catch (error) {
    return notFound();
  }
};

export default page;
