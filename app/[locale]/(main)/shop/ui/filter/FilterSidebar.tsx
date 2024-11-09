import CategoriesSelectBox from "./categories/CategoriesSelectBox";
import PriceFilter from "./price-filter/PriceFilter";
import ClearFilter from "./ClearFilter";
import { useTranslations } from "next-intl";
const FilterSidebar = () => {
  const t = useTranslations("shop.filters");
  return (
    <div className="p-4 bg-text-fourth dark:bg-dark-bgSection ltr:rounded-r-xl ltr:rounded-br-lg-xl rtl:rounded-bl-xl rtl:rounded-tl-xl">
      <h1 className="text-2xl font-bold text-main-main pb-4 dark:text-dark-text">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-4">
        <CategoriesSelectBox />
        <PriceFilter />
        <ClearFilter />
      </div>
    </div>
  );
};

export default FilterSidebar;
