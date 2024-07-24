import { useEffect, useState } from "react";
import css from "./App.module.css";
import {
  URL,
  arrPhotos,
  messageFieldInput,
  messageFieldErrorFetch,
} from "../services/const.js";
import fetchData from "../services/fetchData.js";
import fetchDataJson from "../services/fetchDataJson.js";

import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import MainContainer from "../MainContainer/MainContainer";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Image from "../Image/Image";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [itemClickGallery, setItemClickGallery] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  // const [isLoader, setIsLoader] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [isLoadBtn, setIsLoadBtn] = useState(true);
  const [albumId, setAlbumId] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        if (!!query === false) return;
        const a = 0;
        const response = await fetchData({ URL, query });
        setPhotos(response.results);
        setTotalPages(response.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  return (
    <div className={css.root}>
      <SearchBar setQuery={setQuery} setIsLoadBtn={setIsLoadBtn} />

      <MainContainer>
        {console.log("query", query)}
        {console.log("photos.length", photos)}
        {console.log("totalPages", totalPages)}
        {console.log("itemClickGallery", itemClickGallery)}
        <ImageGallery
          items={photos}
          setItemClickGallery={setItemClickGallery}
          setIsOpenModal={setIsOpenModal}
        />

        {isOpenModal && (
          <ImageModal setIsOpenModal={setIsOpenModal}>
            <Image itemClickGallery={itemClickGallery} />
          </ImageModal>
        )}
        {/* {isLoader && <Loader />} */}
        {/* !photos && */}
        {/* {photos.length > 0 && isLoadBtn && (
          <LoadMoreBtn
            itemClick={{ itemClick }}
            setAlbumId={setAlbumId}
            setPhotos={setPhotos}
          />
        )} */}

        {/* {arrFilter?.length > 0 && (
          <ImageModal clickId={clickId} setOnClose={setOnClose} />
        )} */}
        {/* {getItem(clickId, arrPhotos)[0]["urls"]["regular"]} */}
        {/* {onClose && <ImageModal clickId={clickId} setOnClose={setOnClose} />} */}
        {/* <ErrorMessage isError={isError} messageField={messageFieldErrorFetch} /> */}
      </MainContainer>
    </div>
  );
}

export default App;
