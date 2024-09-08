"use client";
import React, { useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useCropAndUpload } from "./uploadImages/imageUploadHelpers";

const CropImageDialog = ({ image }: { image: string }) => {
  console.log(image);
  const handleCropAndUpload = useCropAndUpload();
  const cropperRef = useRef<ReactCropperElement>(null);

  const [saveLoading, setSaveLoading] = useState(false);

  return image ? (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Crop Image</h3>
        <div className="py-4">
          <Cropper
            src={image}
            style={{ height: 400, width: "100%" }}
            initialAspectRatio={1}
            guides={false}
            ref={cropperRef}
          />
        </div>
        <div className="modal-action">
          <button className="btn">Cancel</button>
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
