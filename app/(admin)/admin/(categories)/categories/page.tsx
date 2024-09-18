"use client";
import BaseTable from "@/components/tables/BaseTable";
import { columns, useGetActions } from "./helper";
const Categories = () => {
  const actions = useGetActions();
  return (
    <BaseTable
      columns={columns}
      endpoint={`/categories`}
      itemsPerPage={10}
      dataName="categories"
      tags={["get-categories"]}
      actions={actions}
    />
  );
};

export default Categories;
