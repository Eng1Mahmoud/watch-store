import React from "react";
import { getUser } from "../getUser";
import { IUser } from "@/types/types";
import EditUserForm from "../ui/EditForm";

const page = async ({ params }: { params: { id: string } }) => {
  const {
    data: { userData },
  } = (await getUser(params.id)) as { data: { userData: IUser } };
  return (
    <div>
      <EditUserForm user={userData} />
    </div>
  );
};

export default page;
