import CategoriesSelectBox from "./categories/CategoriesSelectBox";
import PriceFilter from "./price-filter/PriceFilter";
import ClearFilter from "./ClearFilter";
import { useTranslations } from "next-intl";
const FilterSidebar = () => {
  const t = useTranslations("shop.filters");
  return (
    <div className="p-4 bg-text-fourth rounded-r-xl rounded-br-lg-xl">
      <h1 className="text-2xl font-bold text-main-main pb-4">{t("title")}</h1>
      <CategoriesSelectBox />
      <PriceFilter />

      <ClearFilter />
    </div>
  );
};

export default FilterSidebar;
