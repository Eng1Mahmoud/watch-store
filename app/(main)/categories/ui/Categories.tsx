"use client";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import ProductLoadingUI from "@/components/loading-ui/ProductLoadingUI";
import CategoriesList from "./CategoriesList";
const Categories = () => {
  return (
    <div>
      <InfiniteScroll
        DisplayComponent={CategoriesList}
        endpoint={"/categories"}
        itemsPerPage={20}
        dataKey="categories"
        LoadingComponent={ProductLoadingUI}
      />
    </div>
  );
};

export default Categories;
