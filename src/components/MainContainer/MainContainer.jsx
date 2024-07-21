import css from "./MainContainer.module.css";

const MainContainer = ({ children }) => {
  return <main className={css.main}>{children}</main>;
};

export default MainContainer;
