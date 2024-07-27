import { useEffect, useState } from "react";
import css from "./App.module.css";
import { URL, arrPhotos, message } from "../services/const.js";
import fetchData from "../services/fetchData.js";
import { Link, animateScroll as scroll } from "react-scroll";

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
  const [totalPages, setTotalPages] = useState(null);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [page, setPage] = useState(null);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsShowLoader(true);
        if (!query) return;
        const response = await fetchData({ URL, query, page });
        if (page === 1) {
          setPhotos(response.results);
          setTotalPages(response.total_pages);
        } else {
          setPhotos((pref) => [...pref, ...response.results]);
          setTotalPages(response.total_pages);
        }
      } catch (error) {
        console.log(error);
        setMessageError(message.errorFetch);
      } finally {
        setIsShowLoader(false);
        if (!photos) {
          setMessageError(message.errorFetch);
          return;
        }
      }
    };
    getData();
  }, [query, page]);

  function handleSearch(query) {
    setPhotos([]);
    setPage(1);
    setQuery(query);
  }
  return (
    <div className={css.root}>
      <SearchBar setQuery={handleSearch} setMessageError={setMessageError} />
      {console.log(photos)}
      <MainContainer>
        <p>page:{page}</p>
        <p>totalPages:{totalPages}</p>

        <ImageGallery
          items={photos}
          setItemClickGallery={setItemClickGallery}
          setIsOpenModal={setIsOpenModal}
        />
        {isShowLoader && <Loader />}
        {isOpenModal && (
          <ImageModal setIsOpenModal={setIsOpenModal}>
            <Image itemClickGallery={itemClickGallery} />
          </ImageModal>
        )}
        {photos.length > 0 && page !== totalPages && (
          <LoadMoreBtn setPage={setPage} />
        )}
        <ErrorMessage messageError={messageError} />
      </MainContainer>
    </div>
  );
}

export default App;
