import { useEffect, useState } from "react";
// import viteLogo from "/vite.svg";
import css from "./App.module.css";
import axios from "axios";
import fetchData from "../services/fetchData";
import { URL, arrPhotos } from "../services/const.js";
function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("fly");

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
  useEffect(() => {
    setPhotos(arrPhotos);
  }, [query]);

  console.log(photos);
  return <div className={css.root}></div>;
}

export default App;
