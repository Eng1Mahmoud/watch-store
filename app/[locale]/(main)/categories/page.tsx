import Categories from "./ui/Categories";
import { getTranslations } from "next-intl/server";
const page = async () => {
  const t = await getTranslations("categories-home");
  return (
    <div className="container max-w-screen-lg  py-10">
      <h2 className="text-2xl text-center my-10 text-main-main dark:text-dark-text font-extrabold">
        {t("title")}
      </h2>
      <Categories />
    </div>
  );
};

export default page;
