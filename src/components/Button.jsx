import React from "react";

const Button = ({ text, arrow }) => {
  return (
    <button className="btn">
      <span className="btn-text">{text}</span>
      <span className="btn-arrow">
        <img src={arrow} />
      </span>
    </button>
  );
};

export default Button;
