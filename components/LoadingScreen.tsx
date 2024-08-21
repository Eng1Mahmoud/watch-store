"use client";
import React from "react";
import { useEffect, useRef } from "react";
interface LoadingScreenProps {
  LoadingScreenContent: () => React.JSX.Element;
  hiddenDialog: boolean;
}
const LoadingScreen = ({
  LoadingScreenContent,
  hiddenDialog,
}: LoadingScreenProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  // open daialog on mount
  useEffect(() => {
    const modal = modalRef?.current;
    modal?.showModal();
  }, []);
  // close dialog if hiddenDialog is true
  useEffect(() => {
    if (hiddenDialog) {
      const modal = modalRef?.current;
      modal?.close();
    }
  }, [hiddenDialog]);

  return (
    <div className="blur">
      <dialog id="my_modal_1" className="modal backdrop-blur-md" ref={modalRef}>
        <div className="modal-box">
          <LoadingScreenContent />
        </div>
      </dialog>
    </div>
  );
};

export default LoadingScreen;
