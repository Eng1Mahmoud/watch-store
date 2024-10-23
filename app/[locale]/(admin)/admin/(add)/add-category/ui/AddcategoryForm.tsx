"use client";
import BaseForm from "@/components/formik/BaseForm";
import { categorySchema } from "@/formsValidation/validation";
import { useAddCategory } from "../hooks/addCategory";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import { ICategory } from "@/types/types";

const initialValues: ICategory = {
  name: "",
  cover_url: "",
};

const AddcategoryForm = () => {
  const { onSubmit, loading } = useAddCategory();

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={categorySchema}
      onSubmit={onSubmit}
    >
      <div className="container max-w-[600px] space-y-6 py-10">
        <Input name="name" placeholder="Category Name" type="text" />
        <FileInput name="cover_url" folder="categories" />
        <button type="submit" className="btn btn-primary w-full">
          {loading ? "Loading..." : "Add Category"}
        </button>
      </div>
    </BaseForm>
  );
};

export default AddcategoryForm;
