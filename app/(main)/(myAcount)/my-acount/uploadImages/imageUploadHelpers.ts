import { ReactCropperElement } from "react-cropper";
import { uploadProfilImages } from "@/actions/uploadProfileImages";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux/hooks";
import { closeDialogCropImage } from "@/redux/features/ShowDialogCropImage";
// Function to handle image cropping and uploading
export const useCropAndUpload = () => {
  const dispatch = useAppDispatch();
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
                  .then((res) => {
                    console.log(res);
                    toast.success("Image uploaded successfully");
                    setSaveLoading(false);
                    dispatch(closeDialogCropImage());
                    // here we will update the image into server
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
