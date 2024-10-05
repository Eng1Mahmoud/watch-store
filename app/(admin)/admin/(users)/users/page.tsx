"use client";
import BaseTable from "@/components/tables/BaseTable";
import { columns, useGetActions } from "./helper";
import Search from "@/app/(admin)/ui/Search";
import { useState } from "react";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import TableUI from "@/components/loading-ui/TableUI";
const Users = () => {
  const actions = useGetActions();
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");
  return (
    <>
      <Search setSearchTerm={setSearchTerm} placeholder="search users..." />

      <InfiniteScroll
        DisplayComponent={(props) => (
          <BaseTable {...props} actions={actions} columns={columns} />
        )}
        endpoint={"/users"}
        itemsPerPage={20}
        params={{
          query: searchTerm,
        }}
        dataKey="users"
        LoadingComponent={TableUI}
      />
    </>
  );
};

export default Users;
