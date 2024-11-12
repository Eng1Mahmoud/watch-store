"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useAddCategoryValidation } from "@/formsValidation/addCategoryValidation";
import { useEditCategory } from "../hooks/EditCategory";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import SubmitButton from "@/components/formik/SubmitButton";
import { ICategory } from "@/types/types";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { langs } from "@/utils/translationLang";
import TranslationFields from "@/components/formik/TranslationFields";
const EditCategoryForm = ({ name }: { name: string }) => {
  const t = useTranslations("editCategory");
  // translation fields
  const translationFields = [
    {
      name: "name",
      label: t("formLabels.nameTranslation"),
    },
  ];
  // get category details
  const { data } = useQuery({
    queryKey: ["categoryDetails", name],
    queryFn: async () => {
      const response = await axiosClientInstance.get(
        `/categories/${name}?type=name`,
      );
      return response.data;
    },
  });
  const category = data?.data.category;
  const validationSchema = useAddCategoryValidation();
  const { onSubmit, loading } = useEditCategory({ oldCategoryName: name });
  const initialValues: ICategory = {
    name: category?.name || "",
    cover_url: category?.cover_url || "",
    translations: {
      name: langs.reduce(
        (acc, lang) => ({
          ...acc,
          [lang.value]: category?.translations?.name[lang.value] || "",
        }),
        {},
      ),
    },
  };

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

export default EditCategoryForm;
