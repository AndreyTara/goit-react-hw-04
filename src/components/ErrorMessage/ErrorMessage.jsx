import { useEffect } from "react";
import css from "./ErrorMessage.module.css";
import { message } from "../services/const.js";

const ErrorMessage = ({ messageError }) => {
  return (
    <div>
      {messageError === message.errorFetch ? (
        <h2>Error fetch data, try again...</h2>
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default ErrorMessage;
