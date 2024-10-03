"use client";
import { useState } from "react";
import FilterSidebar from "./filter/FilterSidebar";
import ProductsList from "./products/ProductsList";
import SelectedFilterLabels from "./selected-filters/SelectedFilterLabels";

const ShopContainer = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="py-8">
      {/* show filter button */}
      <button
        className="md:hidden mb-4 px-4 py-2 ml-4 bg-main-main text-white rounded"
        onClick={() => setShowFilter(!showFilter)}
      >
        {showFilter ? "Hide Filters" : "Show Filters"}
      </button>
      {/** show selected filters labels */}
      <SelectedFilterLabels />
      <div className="flex flex-col md:flex-row gap-4">
        <div
          className={`w-full md:w-[25%] ${showFilter ? "block" : "hidden md:block"}`}
        >
          <FilterSidebar />
        </div>
        <div className="w-full md:w-[75%]">
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default ShopContainer;
