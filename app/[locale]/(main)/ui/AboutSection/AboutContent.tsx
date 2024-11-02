"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
export const AboutContent = () => {
  const t = useTranslations("about");
  return (
    <motion.div
      className="py[100px]"
      initial={{ x: "100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl font-bold text-main-main">{t("title")}</h1>
      <p className="text-text-secondary leading-[30px] pt-5">
        {t("description")}
      </p>
    </motion.div>
  );
};
