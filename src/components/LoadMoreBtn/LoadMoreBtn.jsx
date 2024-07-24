import css from "./LoadMoreBtn.module.css";
import fetchDataJson from "../services/fetchDataJson.js";
import { URL } from "../services/const.js";

const LoadMoreBtn = ({ setAlbumId, albumId, setPhotos }) => {
  const handleClick = () => {
    setAlbumId((pref) => pref + 1);
    // console.log(albumId);
    const getData = async () => {
      try {
        const response = await fetchDataJson(URL, albumId);
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
