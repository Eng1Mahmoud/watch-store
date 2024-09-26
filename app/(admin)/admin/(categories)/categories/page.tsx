"use client";
import BaseTable from "@/components/tables/BaseTable";
import { columns, useGetActions } from "./helper";
import { useState } from "react";
import Search from "../../../ui/Search";
const Categories = () => {
  const actions = useGetActions();
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");

  return (
    <>
      <Search
        setSearchTerm={setSearchTerm}
        placeholder="Search categories..."
      />
      <BaseTable
        columns={columns}
        endpoint={`/categories`}
        itemsPerPage={10}
        dataName="categories"
        actions={actions}
        query={searchTerm}
      />
    </>
  );
};

export default Categories;
