"use client";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import TableUI from "@/components/loading-ui/TableUI";
import BaseTable from "@/components/tables/BaseTable";
import Search from "../../../ui/Search";
import { useState } from "react";
import { columns } from "./helper";
import { useGetActions } from "./helper";
const Products = () => {
  const actions = useGetActions();
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} placeholder="search products..." />
      <InfiniteScroll
        DisplayComponent={(props) => (
          <BaseTable {...props} actions={actions} columns={columns} />
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
