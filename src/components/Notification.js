import { Icon } from "@iconify/react";

const Notification = ({ iconName, message }) => {
  return (
    <div
      id="toast-bottom-right"
      class="fixed flex items-center w-full max-w-xs p-4 text-gray bg-white rounded-lg shadow right-5 bottom-5"
      role="alert"
    >
      <div class="text-sm font-medium flex items-center gap-x-3">
        <Icon icon={iconName} />
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Notification;
