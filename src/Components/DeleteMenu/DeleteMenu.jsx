import React from "react";
import style from "./Button.module.css";
const Button = ({text, menu, handleClick}) => {
  return (
    <div>
        <span className={`${style.btn} ${style.primary}`} onClick={()=>{
          handleClick(menu._id);
        }}>{text}</span>
    </div>
  );
};

export default Button;
