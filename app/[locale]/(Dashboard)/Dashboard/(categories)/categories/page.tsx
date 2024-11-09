"use client";
import BaseTable from "@/components/tables/BaseTable";
import { useColumns, useGetActions } from "./helper";
import { useState } from "react";
import Search from "../../../ui/Search";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import TableUI from "@/components/loading-ui/TableUI";
import { useTranslations } from "next-intl";
const Categories = () => {
  const t = useTranslations("categories-admin");
  const actions = useGetActions();
  const columns = useColumns();
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");

  return (
    <>
      <Search setSearchTerm={setSearchTerm} placeholder={t("search")} />

      <InfiniteScroll
        DisplayComponent={(props) => (
          <BaseTable
            {...props}
            actions={actions}
            columns={columns}
            dataKey="categories"
          />
        )}
        endpoint={"/categories"}
        itemsPerPage={20}
        params={{
          query: searchTerm,
        }}
        dataKey="categories"
        LoadingComponent={TableUI}
      />
    </>
  );
};

export default Categories;
