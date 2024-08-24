"use client";
import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
interface LoadingScreenProps {
  Content: () => React.JSX.Element;
  hiddenDialog: boolean;
  onClose: () => void; // Add onClose prop to handle closing from parent
}

const GalleryDialog = ({
  Content,
  hiddenDialog,
  onClose,
}: LoadingScreenProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  // Show or hide the modal based on the hiddenDialog prop
  useEffect(() => {
    const modal = modalRef.current;
    if (hiddenDialog) {
      modal?.close();
    } else {
      modal?.showModal();
    }
  }, [hiddenDialog]);

  const handleClose = () => {
    modalRef.current?.close();
    onClose(); // Call the onClose function passed as a prop to update parent state
  };

  return (
    <div className="h-screen ">
      <dialog
        id="my_modal_1"
        className="modal backdrop-blur-lg relative h-screen w-full flex items-center"
        ref={modalRef}
      >
        <div className="flex justify-end absolute top-10 right-10 z-50 ">
          <IoMdClose
            onClick={handleClose}
            className="text-text-third font-extrabold text-[40px] cursor-pointer"
          />
        </div>
        <div className="modal-box w-full max-w-full bg-transparent shadow-none h-full flex items-center">
          <Content />
        </div>
      </dialog>
    </div>
  );
};

export default GalleryDialog;
