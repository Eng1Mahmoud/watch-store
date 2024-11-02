"use client";
import Input from "@/components/formik/Input";
import TextArea from "@/components/formik/TextArea";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
const FormInputs = () => {
  const t = useTranslations("contact");
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-4">
        <div className="flex flex-col gap-5">
          <Input name="name" placeholder={t("formLabels.name")} type="text" />
          <Input
            name="email"
            placeholder={t("formLabels.email")}
            type="email"
          />
          <Input
            name="phoneNumber"
            placeholder={t("formLabels.phoneNumber")}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <TextArea name="message" placeholder={t("formLabels.message")} />
        </div>
      </div>
      <motion.button
        type="submit"
        className="btn btn-primary w-fit mt-8 block m-auto px-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t("submit")}
      </motion.button>
    </motion.div>
  );
};

export default FormInputs;
