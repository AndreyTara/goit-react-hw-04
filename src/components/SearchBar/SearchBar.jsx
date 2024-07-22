import css from "./SearchBar.module.css";
import { FaSistrix } from "react-icons/fa";
import { messageFieldInput } from "../services/const.js";

const SearchBar = ({ setQuery, query }) => {
  function handleSubmit(event) {
    event.preventDefault();
    let currentInput = event.target.closest("FORM").elements["query"];
    if (!query) {
      alert(`${messageFieldInput}`);
      return;
    }
    setQuery(currentInput.value.trim());
  }

  function handleChange(event) {
    setQuery(event.target.value);
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
          value={query}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
        <button onClick={handleSubmit} className={css.btn} type="submit">
          <FaSistrix />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
