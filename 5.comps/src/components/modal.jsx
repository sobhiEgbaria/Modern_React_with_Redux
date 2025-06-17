import React from "react";
import ReactDOM from "react-dom";

const modal = ({ handelOnClose, actionButton, children }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={handelOnClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 bg-white p-10">
        <div className="flex flex-col justify-between ">
          {children}
          <div className="flex justify-end">{actionButton}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal_container")
  );
};

export default modal;
