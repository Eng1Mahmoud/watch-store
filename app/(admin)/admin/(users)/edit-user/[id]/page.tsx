import React from "react";
import { getUser } from "../getUser";
import EditUserForm from "../ui/EditForm";
import { QueryClient } from "@tanstack/react-query";
const page = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["userDetails"],
    queryFn: () => getUser(params.id),
  });

  return (
    <div>
      <EditUserForm id={params.id} />
    </div>
  );
};

export default page;
