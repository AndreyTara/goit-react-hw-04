import s from "./ImageModal.module.css";
import { useEffect } from "react";

const ImageModal = ({ children, setIsOpenModal, itemClickGallery }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpenModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(false);
    }
  };

  const handleClick = () => {
    setIsOpenModal(false);
  };
  console.log("itemClickGallery", itemClickGallery);
  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <button onClick={handleClick} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default ImageModal;
