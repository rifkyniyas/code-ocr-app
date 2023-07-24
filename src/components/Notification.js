import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearNotification } from "@/redux/notificationSlice";
import { Icon } from "@iconify/react";

const Notification = ({}) => {
  const notification = useSelector((state) => state.notification.message);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  if (!notification) return;
  if (!show) return;
  const dispatch = useDispatch();
  return (
    <div
      id="toast-bottom-right"
      className="fixed flex items-center justify-between w-full border border-primary max-w-xs p-4 text-gray bg-white rounded-lg shadow right-5 bottom-5"
      role="alert"
    >
      <span className="text-sm font-medium ">{notification}</span>
      <button onClick={() => dispatch(clearNotification())}>
        <Icon icon={"carbon:close"} />
      </button>
    </div>
  );
};

export default Notification;
