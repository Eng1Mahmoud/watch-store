"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useEditCategoryValidation } from "@/formsValidation/editCategoryValidation";
import { useEditCategory } from "../hooks/EditCategory";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import { ICategory } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import SubmitButton from "@/components/formik/SubmitButton";
import { useTranslations } from "next-intl";
const EditcategoryForm = ({ name }: { name: string }) => {
  const t = useTranslations("editCategory");
  const validationSchema = useEditCategoryValidation();
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
  const { onSubmit, loading } = useEditCategory({
    oldCategoryName: category?.name,
  });
  const initialValues: ICategory = {
    name: category?.name || "",
    cover_url: category?.cover_url || "",
  };
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

export default EditcategoryForm;
