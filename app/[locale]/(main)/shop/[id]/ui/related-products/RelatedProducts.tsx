"use client";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import ProductList from "../../../ui/products/ProductList";
import ProductLoadingUI from "@/components/loading-ui/ProductLoadingUI";
import { useTranslations } from "next-intl";
const RelatedProducts = () => {
  const t = useTranslations("product-details");
  return (
    <div>
      <h2 className="text-main-main dark:text-dark-text text-2xl font-bold mb-4">
        {t("related-products.title")}
      </h2>
      <InfiniteScroll
        DisplayComponent={ProductList}
        endpoint={"/products"}
        itemsPerPage={20}
        dataKey="products"
        LoadingComponent={ProductLoadingUI}
      />
    </div>
  );
};

export default RelatedProducts;
