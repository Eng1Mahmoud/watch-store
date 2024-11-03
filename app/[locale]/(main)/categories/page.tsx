import Categories from "./ui/Categories";
import { getTranslations } from "next-intl/server";
const page = async () => {
  const t = await getTranslations("categories");
  return (
    <div className="container max-w-screen-lg  py-10">
      <h2 className="text-2xl text-center my-10 text-main-main font-extrabold">
        {t("title")}
      </h2>
      <Categories />
    </div>
  );
};

export default page;
