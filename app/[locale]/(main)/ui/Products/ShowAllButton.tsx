import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
const ShowAllButton = async () => {
  const t = await getTranslations("products");
  return (
    <div className="flex justify-center items-center mt-5">
      <Link href="/shop" className="btn btn-primary  px-16">
        {t("showAll")}
      </Link>
    </div>
  );
};

export default ShowAllButton;