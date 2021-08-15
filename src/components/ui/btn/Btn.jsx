import React from "react";
import "./Btn.scss";

const Btn = ({ children, appearance, ...otherProps }) => {
  return (
    <div className="button">
      <button className={`${appearance}`} {...otherProps}>
        {children}{" "}
      </button>
    </div>
  );
};

export default Btn;
