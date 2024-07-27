import css from "./ErrorMessage.module.css";
import toast, { Toaster } from "react-hot-toast";

const ErrorMessage = ({ messageError }) => {
  if (messageError)
    toast.error(messageError, {
      duration: 1500,
      position: "top-left",
    });
  return (
    <div>
      <Toaster />
    </div>
  );
};
export default ErrorMessage;
