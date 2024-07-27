import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { useRef, useEffect } from "react";

const ImageGallery = ({ items, setItemClickGallery, setIsOpenModal }) => {
  const lastImageRef = useRef();
  const handleClick = (item) => {
    setItemClickGallery(item);
    setIsOpenModal(true);
  };

  useEffect(() => {
    if (lastImageRef.current) {
      // scrollIntoView;
      lastImageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [items]);

  return (
    <ul className={css.ul}>
      {items.map((item, index) => {
        return (
          <li
            className={css.li}
            key={item.id}
            onClick={() => handleClick(item)}
            ref={index === items.length - 1 ? lastImageRef : null}
          >
            <ImageCard item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
