import React from "react";
import "./Btn.scss";

const Btn = ({ children, type }) => {
  return (
    <div className="button">
      <button className={`${type}`}>{children}</button>
    </div>
  );
};

export default Btn;
