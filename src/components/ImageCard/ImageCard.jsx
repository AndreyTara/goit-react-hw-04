import css from "./ImageCard.module.css";
import { FaRegHeart } from "react-icons/fa";

const ImageCard = ({ item }) => {
  return (
    <div className={css.wrap}>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
      <div className={css.soc}>
        <p className={css.info}>
          date:
          {item.updated_at.slice(0, 10)}
        </p>
        <p className={css.info}>likes:{item.likes}</p>
      </div>
    </div>
  );
};
export default ImageCard;
