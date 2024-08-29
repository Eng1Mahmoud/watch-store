"use client";
import "cropperjs/dist/cropper.css";
import { MdPhotoCamera } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { showDialog } from "@/redux/features/ShowDialogCropImage";
import { useEffect, useState } from "react";
export const UploadImage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const image = useAppSelector((state) => state.showDialogCropImage.image);
  console.log(image);
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(showDialog({ show: true, image: reader.result as string }));
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // clear image value when dialog is closed or canceled
  useEffect(() => {
    if (!image) {
      const fileInput = document.getElementById(
        "file-input",
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
        console.log(fileInput.value);
      }
    }
  }, [image]);
  return (
    <div className="relative">
      <input
        type="file"
        id="file-input"
        accept="image/*"
        onChange={(event) => handleFileSelect(event)}
        className="file-input hidden"
      />
      <label
        htmlFor="file-input"
        className="flex items-center justify-center bg-white rounded-full p-2 cursor-pointer"
      >
        <MdPhotoCamera size={20} className="text-main-main" />
      </label>
      {loading && (
        <div className="text-center mt-2 absolute top-0 bottom-0 right-0 left-0 bg-white text-main-main">
          <p>upload...</p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
