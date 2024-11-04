"use client";
import { useAppDispatch } from "@/redux/hooks";
import { clearFilter } from "@/redux/features/filter";
import { useTranslations } from "next-intl";
const ClearFilter = () => {
  const t = useTranslations("shop.filters");
  const dispatch = useAppDispatch();
  const handleClearFilter = () => {
    dispatch(clearFilter());
  };
  return (
    <div>
      <button
        className="btn btn-error-outline w-full "
        onClick={handleClearFilter}
      >
        {t("clear")}
      </button>
    </div>
  );
};

export default ClearFilter;
