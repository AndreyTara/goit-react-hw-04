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
    let currentInput = event.target.closest("FORM").elements["query"];
    if (!input.trim()) {
      setIsError(true);
      setMessageError(message.errorField);
      // alert(`${message.errorField}`);
      searchInput.current.setCustomValidity("Invalid input");
      return;
    }
    searchInput.current.setCustomValidity("");
    setQuery(searchInput.value.trim());
  }

  function handleChange(event) {
    setInput(event.target.value);
    searchInput.current.setCustomValidity("");
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
          // ref={searchInput}
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
