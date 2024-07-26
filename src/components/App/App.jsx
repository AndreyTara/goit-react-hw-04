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
  const [totalPages, setTotalPages] = useState(0);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [isLoadBtn, setIsLoadBtn] = useState(true);
  const [page, setPage] = useState(1);
  const [messageError, setMessageError] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        if (!query) return;
        const response = await fetchData({ URL, query, page });
        if (page === 1) {
          setPhotos(response.results);
          setTotalPages(response);
        } else {
          setPhotos((pref) => [...pref, ...response.results]);
          setTotalPages(response);
        }
      } catch (error) {
        console.log(error);
        setMessageError(message.errorFetch);
      } finally {
        if (totalPages.total_pages === page) setIsLoadBtn(false);
        if (!photos) {
          // alert("Get empty response, fill searchBar and try again...");
          setMessageError(message.errorFetch);
        }
      }
    };
    getData();
  }, [query, page]);

  return (
    <div className={css.root}>
      <SearchBar
        setQuery={setQuery}
        setIsLoadBtn={setIsLoadBtn}
        setMessageError={setMessageError}
        setPhotos={setPhotos}
        setPage={setPage}
      />
      <MainContainer>
        <p>page:{page}</p>
        <p>totalPages:{totalPages.total_pages}</p>
        <p>total:{totalPages.total}</p>
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
        {isShowLoader && <Loader />}
        {photos.length > 0 && isLoadBtn && (
          <LoadMoreBtn
            photos={photos}
            setPhotos={setPhotos}
            query={query}
            page={page}
            setPage={setPage}
          />
        )}
        {/* <ErrorMessage messageError={messageError} /> */}
      </MainContainer>
    </div>
  );
}

export default App;
