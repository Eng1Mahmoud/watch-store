"use client";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import TableUI from "@/components/loading-ui/TableUI";
import BaseTable from "@/components/tables/BaseTable";
import { useColumns, useGetActions } from "./helper";
const Products = () => {
  const actions = useGetActions();
  const columns = useColumns();
  return (
    <div className="pt-10">
      <InfiniteScroll
        DisplayComponent={(props) => (
          <BaseTable
            {...props}
            actions={actions}
            columns={columns}
            dataKey="orders"
          />
        )}
        endpoint={"/orders"}
        itemsPerPage={20}
        dataKey="orders"
        LoadingComponent={TableUI}
      />
    </div>
  );
};

export default Products;
