import css from "./Loader.module.css";
import { ProgressBar } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className={css.wrap}>
      <ProgressBar
        visible={true}
        height="100"
        width="100"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        barColor="#838383"
        borderColor="#838383"
      />
    </div>
  );
};

export default Loader;
