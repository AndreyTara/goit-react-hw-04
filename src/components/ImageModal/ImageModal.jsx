import s from "./ImageModal.module.css";
import { useEffect } from "react";

// const ImageModal = ({ children, onClose, title = "Default modal" }) => {
//   useEffect(() => {
// const handleKeyDown = (e) => {
//   console.log(e.key);
//   if (e.key === "Escape") {
//     onClose();
//   }
// };

//     document.addEventListener("keydown", handleKeyDown);

//     // console.log("Модальне вікно відмалювалось!");
//     // const intervalID = setInterval(() => {
//     //   console.log(new Date().toLocaleTimeString());
//     // }, 1000);
//     // const timeoutID = setTimeout(() => {
//     //   console.log("Badabum!!!🔥");
//     // }, 3000);

//     return () => {
//       console.log("Модалка закрилась!");
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [onClose]);

//   return (
//     <div className={s.wrapper} onClick={handleBackdropClick}>
//       <div className={s.content}>
//         <>
//           <h1>{title}</h1>
//           <hr />
//         </>
//         <button onClick={onClose} className={s.closeBtn}>
//           ×
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

const ImageModal = ({ children, setOnClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        setOnClose(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOnClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setOnClose(false);
    }
  };

  const handleClick = () => {
    setOnClose(false);
  };

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
