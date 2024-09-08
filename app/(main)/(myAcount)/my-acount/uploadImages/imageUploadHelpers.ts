import { ReactCropperElement } from "react-cropper";
import { uploadProfilImages } from "@/actions/uploadProfileImages";
import { toast } from "react-toastify";
import { getTokenClient } from "@/utils/getTokenClient";
import { sendImageToServer } from "./sendImageToServer";
import { useState } from "react";
// Function to handle image cropping and uploading
export const useCropAndUpload = () => {
  const token = getTokenClient();
  const handleCropAndUpload = async (
    cropperRef: React.RefObject<ReactCropperElement>,
    setSaveLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setSaveLoading(true);

    const cropper = cropperRef?.current?.cropper;
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas();
      if (croppedCanvas) {
        croppedCanvas.toBlob(
          async (blob: Blob | null) => {
            if (blob) {
              // Check if the size is greater than 1 MB (1 MB = 1024 * 1024 bytes)
              if (blob.size > 1024 * 1024) {
                toast.error("Image size should be less than 1 MB");
                setSaveLoading(false);
                return;
              }
              const reader = new FileReader();
              reader.onloadend = async () => {
                const base64data = reader.result as string;
                uploadProfilImages(base64data)
                  .then(async (res) => {
                    toast.success("Image uploaded successfully");
                    setSaveLoading(false);

                    // here we will update the image into server
                    sendImageToServer(res.imageUrl, token as string);
                  })
                  .catch(() => {
                    toast.error("Something went wrong while uploading image");
                    setSaveLoading(false);
                  });
              };
              reader.readAsDataURL(blob);
            }
          },
          "image/webp",
          0.5,
        );
      }
    }
  };
  return handleCropAndUpload;
};
