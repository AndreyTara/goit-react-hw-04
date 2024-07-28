import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import "./Modal.css";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
Modal.setAppElement("#root");

function ImageModal({ children, isModalOpen, setIsModalOpen }) {
  const handleOnClick = () => {
    setIsModalOpen(false);
    console.log("Click");
  };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        overlayClassName={css.overlay}
        className={css.content}
        ariaHideApp={false}
        onRequestClose={() => handleOnClick()}
        closeTimeoutMS={300}
      >
        <button
          type="button"
          className={css.closeBtn}
          onClick={() => handleOnClick()}
        >
          x
        </button>
        {children}
      </Modal>
    </div>
  );
}

export default ImageModal;
