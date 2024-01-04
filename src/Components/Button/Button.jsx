import React from "react";
import style from "./Button.module.css";
const Button = (props) => {
  return (
    <div>
      {props.var === "sec" ? (
        <span className={`${style.btn} ${style.secondary}`} onClick={props.handleClick}>{props.text}</span>
      ) : (
        <span className={`${style.btn} ${style.primary}`}onClick={props.handleClick}>{props.text}</span>
      )}
    </div>
  );
};

export default Button;
