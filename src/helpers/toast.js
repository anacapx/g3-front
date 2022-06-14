import { toast } from "react-toastify";

function errorMsg(message) {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "colored",
    draggable: true,
    progress: undefined,
  });
}
function successMsg(message) {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "colored",
    draggable: true,
    progress: undefined,
  });
}

function infoMsg(message) {
  toast.info(message, {
    position: "bottom-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "colored",
    draggable: true,
    progress: undefined,
  });
}

function warningMsg(message) {
  toast.warning(message, {
    position: "bottom-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "colored",
    draggable: true,
    progress: undefined,
  });
}

function defaultMsg(message) {
  toast(message, {
    position: "bottom-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "colored",
    draggable: true,
    progress: undefined,
  });
}

export default { errorMsg, successMsg, infoMsg, warningMsg, defaultMsg };