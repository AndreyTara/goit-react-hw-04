import css from "./SearchBar.module.css";
import { FaSistrix } from "react-icons/fa";

const SearchBar = () => {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
          className={css.query}
          name="query"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <FaSistrix />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
