import css from "./Image.module.css";

const Image = ({ id, arr }) => {
  const getItem = (id, items) => {
    return items.filter((item) => item.id === id);
  };
  return (
    <div className={css.wrap}>
      {getItem(id, arr).map((item) => {
        console.log(item);
        return (
          <>
            <img
              className={css.img}
              src={item.urls.regular}
              alt={item.alt_description}
            />
          </>
        );
      })}
    </div>
  );
};

export default Image;
