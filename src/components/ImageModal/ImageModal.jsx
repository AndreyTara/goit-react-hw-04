import React, { useRef } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import "./Modal.css";

function ImageModal({ isOpen, setIsOpen, itemClickGallery }) {
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
        <div className={css.wrap}>
          <img
            className={css.img}
            src={itemClickGallery.urls.regular}
            alt={itemClickGallery.alt_description}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ImageModal;
