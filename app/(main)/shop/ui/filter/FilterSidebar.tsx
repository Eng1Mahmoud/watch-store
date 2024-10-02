import React from "react";
import CategoriesSelectBox from "./categories/CategoriesSelectBox";
import PriceFilter from "./price-filter/PriceFilter";
import ClearFilter from "./ClearFilter";
const FilterSidebar = () => {
  return (
    <div className="p-4 bg-text-fourth rounded-r-xl rounded-br-lg-xl">
      <h1 className="text-2xl font-bold text-main-main pb-4">Filter</h1>
      <CategoriesSelectBox />
      <PriceFilter />

      <ClearFilter />
    </div>
  );
};

export default FilterSidebar;
