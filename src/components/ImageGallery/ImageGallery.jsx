import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ photos }) => {
  console.log(photos);

  return (
    <ul className={css.ul}>
      {photos.map((photo) => {
        return (
          <li className={css.li} key={photo.id}>
            <ImageCard photo={photo} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
