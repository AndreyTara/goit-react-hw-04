import { useEffect } from "react";
import css from "./ErrorMessage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { message } from "../services/const.js";

const ErrorMessage = ({ messageError }) => {
  useEffect(() => {
    toast.error(messageError, {
      duration: 1800,
      position: "top-left",
    });
  }, [messageError]);
  return (
    <div>
      {messageError === message.errorField ? (
        <Toaster />
      ) : (
        <h2>Error fetch data, try again...</h2>
      )}
    </div>
  );
};
export default ErrorMessage;
