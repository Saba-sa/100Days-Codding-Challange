import React from "react";

const Loading = () => {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
