import { useEffect, useState } from "react";
import css from "./App.module.css";
import { URL, arrPhotos } from "../services/const.js";
// import fetchData from "../services/fetchData";

import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import MainContainer from "../MainContainer/MainContainer";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("fly");
  const [isLoader, setIsLoader] = useState(false);
  const [isLoadBtn, setIsLoadBtn] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetchData(URL, query);
  //       setPhotos((prev) => [...prev, ...response]);
  //       // setPhotos(response);
  //       console.log(photos);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, [query]);
  // useEffect(() => {
  //   setPhotos(arrPhotos);
  // }, [query]);

  // console.log(photos);
  return (
    <div className={css.root}>
      <SearchBar />
      <MainContainer>
        <ImageGallery photos={arrPhotos} />
        {isLoader && <Loader />}
        {isLoadBtn && <LoadMoreBtn />}
        {isModal && <ImageModal />}
        <ErrorMessage isError={isError} />
      </MainContainer>
    </div>
  );
}

export default App;
