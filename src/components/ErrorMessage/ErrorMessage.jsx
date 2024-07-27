import { useEffect } from "react";
import css from "./ErrorMessage.module.css";
import toast, { Toaster } from "react-hot-toast";

const ErrorMessage = ({ messageError }) => {
  useEffect(() => {
    toast.error(messageError, {
      duration: 1800,
      position: "top-left",
    });
  }, [messageError]);
  return (
    <div>
      <Toaster />
    </div>
  );
};
export default ErrorMessage;
