"use client";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import TableUI from "@/components/loading-ui/TableUI";
import BaseTable from "@/components/tables/BaseTable";
import Search from "../../../ui/Search";
import { useState } from "react";
import { useColumns, useGetActions } from "./helper";
import { useTranslations } from "next-intl";
const Products = () => {
  const t = useTranslations("products");
  const actions = useGetActions();
  const columns = useColumns();
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");
  return (
    <div>
      <Search setSearchTerm={setSearchTerm} placeholder={t("search")} />
      <InfiniteScroll
        DisplayComponent={(props) => (
          <BaseTable
            {...props}
            actions={actions}
            columns={columns}
            dataKey="products"
          />
        )}
        endpoint={"/products"}
        itemsPerPage={20}
        params={{
          query: searchTerm,
        }}
        dataKey="products"
        LoadingComponent={TableUI}
      />
    </div>
  );
};

export default Products;
