import React from "react";
import EditcategoryForm from "../ui/EditForm";
import { getCategory } from "../getCategory";
import { ICategory } from "@/types/types";
const page = async ({ params }: { params: { name: string } }) => {
  const {
    data: { category },
  } = (await getCategory(params.name)) as { data: { category: ICategory } };
  return (
    <div>
      <EditcategoryForm category={category} />
    </div>
  );
};

export default page;
