"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useAddCategoryValidation } from "@/formsValidation/addCategoryValidation";
import { useAddCategory } from "../hooks/addCategory";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import { ICategory } from "@/types/types";
import { useTranslations } from "next-intl";
import SubmitButton from "@/components/formik/SubmitButton";
const initialValues: ICategory = {
  name: "",
  cover_url: "",
};

const AddcategoryForm = () => {
  const validationSchema = useAddCategoryValidation();
  const { onSubmit, loading } = useAddCategory();
  const t = useTranslations("addCategory");
  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container max-w-[600px] space-y-6 py-10">
        <Input name="name" placeholder={t("formLabels.name")} type="text" />
        <FileInput name="cover_url" folder="categories" />
        <SubmitButton
          loading={loading}
          text={t("submitButton")}
          position="center"
        />
      </div>
    </BaseForm>
  );
};

export default AddcategoryForm;
