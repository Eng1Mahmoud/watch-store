"use client";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import ProductList from "./ProductList";
import LoadingUI from "./LoadingUI";
const ProductContainer = () => {
  return (
    <div>
      <InfiniteScroll
        DisplayComponent={ProductList}
        endpoint={"/products"}
        itemsPerPage={20}
        params={{
          category: "men's clothing",
        }}
        dataKey="products"
        LoadingComponent={LoadingUI}
      />
    </div>
  );
};

export default ProductContainer;
