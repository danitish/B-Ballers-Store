import { toast } from "react-toastify";

export const toastifySuccess = (msg, position = "top-right") => {
  return toast.success(msg, {
    position,
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};
