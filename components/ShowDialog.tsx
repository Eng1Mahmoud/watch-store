"use client";
import React from "react";
import { useEffect, useRef } from "react";
interface LoadingScreenProps {
  Content: () => React.JSX.Element;
  hiddenDialog: boolean;
}
const ShowDialog = ({ Content, hiddenDialog }: LoadingScreenProps) => {
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
    } else {
      const modal = modalRef?.current;
      modal?.showModal();
    }
  }, [hiddenDialog]);
  //
  useEffect(() => {}, []);
  return (
    <div className="blur">
      <dialog id="my_modal_1" className="modal backdrop-blur-md" ref={modalRef}>
        <div className="modal-box dark:bg-dark-bgSection dark:text-dark-text">
          <Content />
        </div>
      </dialog>
    </div>
  );
};

export default ShowDialog;
