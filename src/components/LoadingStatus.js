import { Icon } from "@iconify/react";
import React from "react";

const LoadingStatus = ({ message, percentage }) => {
  return (
    <div>
      <Icon
        icon={"ant-design:loading-3-quarters-outlined"}
        className="text-primary animate-spin"
      />
      <p>{message}</p>
      <span>{percentage}&#37;</span>
    </div>
  );
};

export default LoadingStatus;
