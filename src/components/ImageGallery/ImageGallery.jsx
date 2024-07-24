import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, setItemClickGallery, setIsOpenModel }) => {
  const handleClick = (item) => {
    setItemClickGallery(item);
    setIsOpenModel(true);
  };
  return (
    <ul className={css.ul}>
      {items.map((item) => {
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