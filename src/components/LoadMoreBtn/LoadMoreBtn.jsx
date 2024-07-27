import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage }) => {
  const handleClick = () => {
    setPage((pref) => pref + 1);
  };

  return (
    <div className={css.wrap}>
      <button onClick={handleClick} className={css.btn}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
