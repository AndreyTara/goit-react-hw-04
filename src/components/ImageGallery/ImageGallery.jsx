import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, setItemClickGallery, setIsOpenModal }) => {
  const handleClick = (item) => {
    setItemClickGallery(item);
    setIsOpenModal(true);
  };

  return (
    <ul className={css.ul}>
      {items.map((item, index) => {
        return (
          <li
            className={css.li}
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <ImageCard item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
