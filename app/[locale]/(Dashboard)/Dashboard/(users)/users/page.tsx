"use client";
import BaseTable from "@/components/tables/BaseTable";
import { useColumns, useGetActions } from "./helper";
import Search from "@/app/[locale]/(Dashboard)/ui/Search";
import { useState } from "react";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import TableUI from "@/components/loading-ui/TableUI";
import { useTranslations } from "next-intl";
const Users = () => {
  const actions = useGetActions();
  const columns = useColumns();
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");
  const t = useTranslations("users");
  return (
    <>
      <Search setSearchTerm={setSearchTerm} placeholder={t("search")} />

      <InfiniteScroll
        DisplayComponent={(props) => (
          <BaseTable
            {...props}
            actions={actions}
            columns={columns}
            dataKey="users"
          />
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
