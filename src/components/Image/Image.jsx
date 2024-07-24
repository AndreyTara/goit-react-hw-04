import css from "./Image.module.css";

const Image = ({ itemClickGallery }) => {
  return (
    <div className={css.wrap}>
      <img
        className={css.img}
        src={itemClickGallery.urls.regular}
        alt={itemClickGallery.alt_description}
      />
    </div>
  );
};

export default Image;
