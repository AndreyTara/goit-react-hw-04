import css from "./SearchBar.module.css";
import { FaSistrix } from "react-icons/fa";
import { messageFieldInput } from "../services/const.js";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ setQuery, setIsLoadBtn }) => {
  const [input, setInput] = useState("");
  const searchInput = useRef();

  const notify = () =>
    toast.error(messageFieldInput, {
      duration: 1500,
      position: "top-left",
    });

  function handleSubmit(event) {
    event.preventDefault();
    let currentInput = event.target.closest("FORM").elements["query"];
    console.log(currentInput.value);
    if (!input.trim()) {
      notify();
      searchInput.current.setCustomValidity("Invalid input");
      return;
    }
    searchInput.current.setCustomValidity("");
    setQuery(currentInput.value.trim());
    setIsLoadBtn(true);
    setInput("");
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
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
