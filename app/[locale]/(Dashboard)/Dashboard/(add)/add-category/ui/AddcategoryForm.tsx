"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useAddCategoryValidation } from "@/formsValidation/addCategoryValidation";
import { useAddCategory } from "../hooks/addCategory";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import SubmitButton from "@/components/formik/SubmitButton";
import { ICategory } from "@/types/types";
import { useTranslations } from "next-intl";
import { langs } from "@/utils/translationLang";
import TranslationFields from "@/components/formik/TranslationFields";
const initialValues: ICategory = {
  name: "",
  cover_url: "",
  translations: {
    name: langs.reduce((acc, lang) => ({ ...acc, [lang.value]: "" }), {}),
  },
};

const AddCategoryForm = () => {
  const validationSchema = useAddCategoryValidation();
  const { onSubmit, loading } = useAddCategory();
  const t = useTranslations("addCategory");
  const translationFields = [
    {
      name: "name",
      label: t("formLabels.nameTranslation"),
    },
  ];

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container space-y-6 py-10">
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2">
          <div className="space-y-4">
            <Input name="name" placeholder={t("formLabels.name")} type="text" />
            <FileInput name="cover_url" folder="categories" />
          </div>
          <div className="flex flex-col gap-4">
            {/* Translation fields */}
            <TranslationFields
              fieldName="translations"
              fields={translationFields}
            />
          </div>
        </div>
        <SubmitButton
          loading={loading}
          text={t("submitButton")}
          position="center"
        />
      </div>
    </BaseForm>
  );
};

export default AddCategoryForm;
