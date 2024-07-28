import { useEffect, useState, useRef } from "react";
import { message } from "../services/const.js";
import { fetchData } from "../services/fetchData.js";
import { url } from "../services/url.js";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import MainContainer from "../MainContainer/MainContainer";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal11/ImageModal.jsx";
import Image from "../Image/Image";
import css from "./App.module.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemClickGallery, setItemClickGallery] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [page, setPage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const lastElement = useRef();

  useEffect(() => {
    if (lastElement.current) {
      lastElement.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    if (!photos) {
      setIsError(true);
      setMessageError(message.errorFetch);
    }
    if (photos.length < 1) {
      setIsError(true);
      setMessageError(message.errorFetch);
    }
  }, [photos]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsShowLoader(true);
        if (!query) return;
        const response = await fetchData({ url, query, page });
        if (page === 1) {
          setPhotos(response.results);
          setTotalPages(response.total_pages);
        } else {
          setPhotos((pref) => [...pref, ...response.results]);
          setTotalPages(response.total_pages);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
        setMessageError(message.errorFetch);
      } finally {
        setIsShowLoader(false);
      }
    };
    getData();
  }, [query, page, url]);

  function handleSearch(query) {
    setPhotos([]);
    setPage(1);
    setIsError(false);
    setQuery(query);
  }
  return (
    <div className={css.root}>
      <SearchBar
        setQuery={handleSearch}
        setMessageError={setMessageError}
        setIsError={setIsError}
      />
      <MainContainer>
        {isError && <ErrorMessage messageError={messageError} />}
        {!isError && (
          <ImageGallery
            items={photos}
            setItemClickGallery={setItemClickGallery}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {isShowLoader && <Loader />}
        {/* isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} */}
        {isModalOpen && (
          <ImageModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <Image itemClickGallery={itemClickGallery} />
          </ImageModal>
        )}
        {photos.length > 0 && page !== totalPages && (
          <LoadMoreBtn setPage={setPage} />
        )}
        <p ref={lastElement}></p>
      </MainContainer>
    </div>
  );
}

export default App;
