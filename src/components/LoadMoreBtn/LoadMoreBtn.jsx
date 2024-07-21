import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  return (
    <div className={css.wrap}>
      <button className={css.btn}>Load more</button>
    </div>
  );
};
export default LoadMoreBtn;
