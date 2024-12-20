import { uploadImage } from "@/actions/uploadImages";
import { ErrorMessage, useField } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
interface FileInputProps {
  name: string;
  label?: string;
  folder: string;
}

const FileInput: React.FC<FileInputProps> = ({ name, label, folder }) => {
  const t = useTranslations("formik");
  const [uploading, setUploading] = useState(false);
  const [field, meta, helpers] = useField(name);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      try {
        const { imageUrl } = await uploadImage(formData, folder);
        helpers.setValue(imageUrl);
      } catch (error) {
        toast.error(t("errorUploading"));
      } finally {
        setUploading(false);
      }
    }
  };

  const handleDelete = () => {
    helpers.setValue("");
  };

  return (
    <div className="relative">
      <div>
        <input
          id={name}
          name={name}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor={name}
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg 
          cursor-pointer bg-gray-50 dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-dark-bgSection relative"
        >
          {uploading ? (
            <p>{t("uploading")}</p>
          ) : field.value ? (
            <>
              <Image
                src={field.value}
                width={1000}
                height={1000}
                quality={100}
                alt={label || "Uploaded Image"}
                className="w-full h-full object-cover rounded-lg"
              />
            </>
          ) : (
            <>
              <FiUpload className="w-12 h-12 text-gray-400 dark:text-dark-text" />
              <p className="mt-2 text-sm text-gray-500 dark:text-dark-text">
                {t("uploadImage")} {label}
              </p>
            </>
          )}
        </label>
        {field.value && (
          <div className="absolute top-2 right-2 z-[1000]">
            <MdDelete
              size={40}
              className="text-red-500 cursor-pointer"
              onClick={handleDelete}
            />
          </div>
        )}
      </div>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
};

export default FileInput;
