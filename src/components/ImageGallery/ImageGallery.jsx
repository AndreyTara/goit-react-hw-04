import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, setClickId, setOnClose }) => {
  const handleClick = (id) => {
    setClickId(id);
    setOnClose(true);
  };
  return (
    <ul className={css.ul}>
      {items.map((item) => {
        return (
          <li
            className={css.li}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <ImageCard item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
