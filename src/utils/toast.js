import { toast } from "react-hot-toast";

const sToast = (msg) => {
  toast.success(msg, {
    // position: "top-left  top-center  top-right  bottom-left  bottom-center  bottom-right"
    position: "top-right",
    reverseOrder: false,
    duration: 2000,
  });
};

const eToast = (msg) => {
  toast.error(msg, {
    // position: "top-left  top-center  top-right  bottom-left  bottom-center  bottom-right"
    position: "top-right",
    reverseOrder: false,
    duration: 2000,
  });
};

const Utility = {
  eToast,
  sToast,
};

export default Utility;
