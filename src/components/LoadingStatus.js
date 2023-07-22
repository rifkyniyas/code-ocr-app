import { Icon } from "@iconify/react";
import React from "react";

const LoadingStatus = ({ message, percentage }) => {
  return (
    <div className="flex flex-col items-center gap-y-3 text-sm">
      <Icon
        icon={"ant-design:loading-3-quarters-outlined"}
        className="text-primary animate-spin w-10 h-10"
      />
      {/* Capitalize the first word of message */}
      {message && percentage && (
        <div className="flex justify-center items-center font-semibold text-center">
          <p>{message.charAt(0).toUpperCase() + message.slice(1)}</p>
          &nbsp;&#45;&nbsp;
          <span>{Math.ceil(percentage)}&#37;</span>
        </div>
      )}
    </div>
  );
};

export default LoadingStatus;
