"use client";
import { useTranslations } from "next-intl";
import BaseForm from "@/components/formik/BaseForm";
import Input from "@/components/formik/Input";
import { useSettingsValidation } from "@/formsValidation/settingsValidation";
const BoxWraperInput = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="box-wrapper">
      <h2 className="text-lg font-bold text-main-main dark:text-dark-text py-2">
        {title}
      </h2>
      {children}
    </div>
  );
};
const SettingForm = () => {
  const t = useTranslations("settings");
  const validationSchema = useSettingsValidation();
  return (
    <BaseForm
      initialValues={{}}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      <BoxWraperInput title={t("formLabels.taxs")}>
        <Input name="taxs" placeholder={t("formLabels.taxs")} type="text" />
      </BoxWraperInput>
    </BaseForm>
  );
};

export default SettingForm;
