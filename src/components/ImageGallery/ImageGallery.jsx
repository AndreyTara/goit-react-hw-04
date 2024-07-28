import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, setItemClickGallery, setIsModalOpen }) => {
  return (
    <ul className={css.ul}>
      {items.map((item, index) => {
        return (
          <li className={css.li} key={item.id}>
            <ImageCard
              item={item}
              setItemClickGallery={setItemClickGallery}
              setIsModalOpen={setIsModalOpen}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
