import css from "./SearchBar.module.css";
import { FaSistrix } from "react-icons/fa";
import { message } from "../services/const.js";
import { useState, useRef } from "react";

const SearchBar = ({ setQuery, setMessageError, setIsError }) => {
  const [input, setInput] = useState("");

  const searchInput = useRef();

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
    setQuery(currentInput.value.trim());
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
    </header>
  );
};

export default SearchBar;
