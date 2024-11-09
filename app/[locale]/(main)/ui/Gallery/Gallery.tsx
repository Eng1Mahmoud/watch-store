import React from "react";
import ShowImages from "./ShowImages";
import { getTranslations } from "next-intl/server";

export const Gallery = async () => {
  const t = await getTranslations("gallery");
  return (
    <div className="container " id="gallery">
      <h1 className="text-center text-main-main font-bold text-[30px] py-10 dark:text-dark-text">
        {t("title")}
      </h1>
      <ShowImages />
    </div>
  );
};
