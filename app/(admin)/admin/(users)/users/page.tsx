"use client";
import BaseTable from "@/components/tables/BaseTable";
import { columns, useGetActions } from "./helper";
import Search from "@/app/(admin)/ui/Search";
import { useState } from "react";
const Users = () => {
  const actions = useGetActions();
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");
  return (
    <>
      <Search setSearchTerm={setSearchTerm} placeholder="search users..." />
      <BaseTable
        columns={columns}
        endpoint={`/users`}
        itemsPerPage={10}
        dataName="users"
        tags={["get-all-users"]}
        actions={actions}
        query={searchTerm}
      />
    </>
  );
};

export default Users;
