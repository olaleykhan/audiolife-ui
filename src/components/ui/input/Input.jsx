import React from "react";
import "./Input.scss";

const Input = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="input-group">
      {label ? <label className="label"> {label}</label> : null}
      <input onChange={handleChange} {...otherProps} autoComplete="false" />
    </div>
  );
};

export default Input;
