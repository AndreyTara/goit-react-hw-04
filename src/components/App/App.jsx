import { useEffect, useState } from "react";
import css from "./App.module.css";
import {
  URL,
  arrPhotos,
  messageFieldInput,
  messageFieldErrorFetch,
} from "../services/const.js";
import fetchData from "../services/fetchData";

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
  const [onClose, setOnClose] = useState(false);
  const [clickId, setClickId] = useState("");
  // const [isLoader, setIsLoader] = useState(false);
  // const [isLoadBtn, setIsLoadBtn] = useState(true);
  // const [isError, setIsError] = useState(false);

  // let count = 0;
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetchData(URL, query);
  //       // setPhotos((prev) => [...prev, ...response]);
  //       // setPhotos(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  //   console.log(count++);
  // }, []);

  // console.log(arrPhotos);
  // const getItem = (id, arr) => {
  //   return arr.filter((item) => item.id === clickId);
  // };
  // const arrFilter = arrPhotos.filter((item) => item.id === clickId);
  // const item = getItem(clickId, arrPhotos);
  return (
    <div className={css.root}>
      <SearchBar setQuery={setQuery} query={query} />
      <MainContainer>
        <ImageGallery
          items={arrPhotos}
          setClickId={setClickId}
          setOnClose={setOnClose}
        />
        {/* {onClose && <ImageModal clickId={clickId} setOnClose={setOnClose} />} */}
        {onClose && (
          <ImageModal setOnClose={setOnClose}>
            {/* <div>
              {getItem(clickId, arrPhotos).map((item) => {
                console.log(item);
                return (
                  <div >
                    <img src={item.urls.regular} alt={item.alt_description} />
                  </div>
                );
              })}
            </div> */}
            <Image id={clickId} arr={arrPhotos} />
          </ImageModal>
        )}
        {/* {isLoader && <Loader />} */}
        {/* {isLoadBtn && <LoadMoreBtn />} */}
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
