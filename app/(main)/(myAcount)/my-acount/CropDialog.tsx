"use client";
import React, { useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useCropAndUpload } from "./uploadImages/imageUploadHelpers";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeDialogCropImage } from "@/redux/features/ShowDialogCropImage";

const CropImageDialog: React.FC = () => {
  const handleCropAndUpload = useCropAndUpload();
  const dispatch = useAppDispatch();
  const { show, image } = useAppSelector((state) => state.showDialogCropImage);
  const cropperRef = useRef<ReactCropperElement>(null);

  const [saveLoading, setSaveLoading] = useState(false);
  // handle close dialog
  const handleClose = () => {
    dispatch(closeDialogCropImage());
  };
  return show ? (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Crop Image</h3>
        <div className="py-4">
          {image && (
            <Cropper
              src={image}
              style={{ height: 400, width: "100%" }}
              initialAspectRatio={1}
              guides={false}
              ref={cropperRef}
            />
          )}
        </div>
        <div className="modal-action">
          <button className="btn" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleCropAndUpload(cropperRef, setSaveLoading)}
          >
            {saveLoading ? "Uploading..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CropImageDialog;
