import { uploadImage } from "@/actions/uploadImages";
import { ErrorMessage, useField } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";

interface FileInputProps {
  name: string;
  label?: string;
  folder: string;
}

const FileInput: React.FC<FileInputProps> = ({ name, label, folder }) => {
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
        toast.error("Error uploading image");
      } finally {
        setUploading(false);
      }
    }
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
          cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          {uploading ? (
            <p>Uploading...</p>
          ) : field.value ? (
            <Image
              src={field.value}
              width={1000}
              height={1000}
              quality={100}
              alt={label || "Uploaded Image"}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <>
              <FiUpload className="w-12 h-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">
                Click to select or drag and drop an image
              </p>
            </>
          )}
        </label>
      </div>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
};

export default FileInput;
