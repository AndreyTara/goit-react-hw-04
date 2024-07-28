import React, { useRef } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import "./Modal.css";

function ImageModal({ children, isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        // overlayClassName="Overlay"
        // className="Modal"
        ariaHideApp={false}
        onRequestClose={() => handleClick()}
        closeTimeoutMS={300}
      >
        <button
          type="button"
          className="closeBtn"
          onClick={() => handleClick()}
        >
          x
        </button>
        {children}
      </Modal>
    </div>
  );
}

export default ImageModal;
