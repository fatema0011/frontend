import React from "react";
import style from "./Button.module.css";

const AddToCart = ({ text, menuId,handleAddToCart }) => {
  const handleClick = () => {
    handleAddToCart(menuId);
  };

  return (
    <div>
      <span className={`${style.btn} ${style.secondary}`} onClick={handleClick}>
        {text}
      </span>
    </div>
  );
};

export default AddToCart;
