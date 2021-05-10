import React from "react";
import ReactDom from "react-dom";
import "./style.css";

const Employee = (props) => {
  return ReactDom.createPortal(
    <div className="visible modal">Employee Modal</div>,
    document.getElementById("emp-modal")
  );
};

export default Employee;
