import css from "./LoadMoreBtn.module.css";
import fetchData from "../services/fetchData";
import { URL } from "../services/const.js";

const LoadMoreBtn = () => {
  const handleClick = () => {
    const getData = async () => {
      try {
        const response = await fetchData(URL, query);
        setPhotos((prev) => [...prev, ...response]);
      } catch (error) {
        console.log(error);
      } finally {
        console.log(photos);
      }
    };
    getData();
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
