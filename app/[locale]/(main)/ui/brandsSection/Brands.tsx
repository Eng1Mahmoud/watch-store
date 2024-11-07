import { BrandItems } from "./BrandItems";
import { getTranslations } from "next-intl/server";
export const Brands = async () => {
  const t = await getTranslations("brand");
  return (
    <div className="container" id="brands">
      <h2 className="text-center text-3xl font-bold mt-10 text-main-main">
        {t("title")}
      </h2>

      <div className="grid grid-cols-2  md:grid-cols-8 gap-3  mt-10">
        <BrandItems />
      </div>
    </div>
  );
};
