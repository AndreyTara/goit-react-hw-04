import css from "./ImageCard.module.css";
import { FaRegHeart } from "react-icons/fa";

const ImageCard = ({ photo }) => {
  return (
    <div className={css.wrap}>
      <img
        className={css.img}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
      <div className={css.soc}>
        <p className={css.date}>
          date:
          {photo.updated_at.slice(0, 10)}
          {/* {photo.topic_submissions.updated_at.slice(0, 9)} */}
        </p>
        <p className={css.likes}>likes:{photo.likes}</p>
      </div>
    </div>
  );
};
export default ImageCard;
