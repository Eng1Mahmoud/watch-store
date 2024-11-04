"use client";
import { useState } from "react";
import FilterSidebar from "./filter/FilterSidebar";
import SelectedFilterLabels from "./selected-filters/SelectedFilterLabels";
import ProductContainer from "./products/ProductContainer";
import { useTranslations } from "next-intl";
const ShopContainer = () => {
  const [showFilter, setShowFilter] = useState(false);
  const t = useTranslations("shop.filters");
  return (
    <div className="py-8">
      {/* show filter button */}
      <button
        className="md:hidden mb-0 px-4 py-2 mx-4 bg-main-main text-white rounded"
        onClick={() => setShowFilter(!showFilter)}
      >
        {showFilter ? t("hide-filters") : t("show-filters")}
      </button>
      {/** show selected filters labels */}
      <SelectedFilterLabels />
      <div className="flex flex-col md:flex-row gap-4">
        <div
          className={`w-full md:w-[25%] ${showFilter ? "block" : "hidden md:block"}`}
        >
          <FilterSidebar />
        </div>
        <div className="w-full md:w-[75%] px-2 md:px-8">
          {" "}
          <ProductContainer />
        </div>
      </div>
    </div>
  );
};

export default ShopContainer;
