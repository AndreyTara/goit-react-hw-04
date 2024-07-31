import css from "./SearchBar.module.css";
import { FaSistrix } from "react-icons/fa";
import { message } from "../services/const.js";
import { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({
  setQuery,
  messageError,
  setMessageError,
  isError,
  setIsError,
}) => {
  const [input, setInput] = useState("");
  const searchInput = useRef();

  useEffect(() => {
    toast.error(messageError, {
      duration: 1800,
      position: "top-left",
    });
  }, [messageError]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!input.trim()) {
      setIsError(true);
      setMessageError(message.errorField);
      return;
    }
    setQuery(searchInput.current.value.trim());
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
          className={css.query}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          value={input}
          onChange={handleChange}
          placeholder="Search images and photos"
          ref={searchInput}
        />
        <button onClick={handleSubmit} className={css.btn} type="submit">
          <FaSistrix />
        </button>
      </form>
      {messageError === message.errorField && isError ? <Toaster /> : <p></p>}
    </header>
  );
};

export default SearchBar;
