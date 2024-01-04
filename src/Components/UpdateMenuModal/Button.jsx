import React from "react";
import style from "./Button.module.css";
const Button = ({text, menu,handleClick}) => {
  return (
    <div>
        <span className={`${style.btn} ${style.primary}`} onClick={()=>{
          handleClick(menu)
        }}>{text}</span>
    </div>
  );
};

export default Button;
