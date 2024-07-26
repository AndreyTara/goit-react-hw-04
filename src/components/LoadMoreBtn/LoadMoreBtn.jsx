import css from "./LoadMoreBtn.module.css";
import fetchData from "../services/fetchData.js";
import { URL } from "../services/const.js";
import { useEffect, useRef } from "react";

const LoadMoreBtn = ({ photos, setPhotos, query, page, setPage }) => {
  const btnLoadMore = useRef(null);

  const handleClick = () => {
    setPage((pref) => pref + 1);
  };
  useEffect(() => {
    if (btnLoadMore.current) {
      btnLoadMore.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [photos]);
  return (
    <div className={css.wrap}>
      <button onClick={handleClick} className={css.btn} ref={btnLoadMore}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
