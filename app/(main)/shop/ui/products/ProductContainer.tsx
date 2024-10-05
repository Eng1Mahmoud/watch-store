"use client";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import ProductList from "./ProductList";
import ProductLoadingUI from "@/components/loading-ui/ProductLoadingUI";
import { useAppSelector } from "@/redux/hooks";
const ProductContainer = () => {
  const { filter } = useAppSelector((state) => state.filter);
  console.log(filter);
  // loop through the filter object and create a new object with the same keys and values if value "" or 0 or null not add it
  const params = Object.entries(filter).reduce((acc: any, [key, value]) => {
    if (value !== "" && value !== 0 && value !== null) {
      acc[key] = value;
    }
    return acc;
  }, {});
  return (
    <div>
      <InfiniteScroll
        DisplayComponent={ProductList}
        endpoint={"/products"}
        itemsPerPage={20}
        params={params}
        dataKey="products"
        LoadingComponent={ProductLoadingUI}
      />
    </div>
  );
};

export default ProductContainer;
