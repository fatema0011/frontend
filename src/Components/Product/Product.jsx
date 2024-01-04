import React from "react";
import style from "./Product.module.css";
import Menus from "./Menus";

const Product = () => {
  return (
    <div className={style.product}>
      <p>Product</p>
      <h2>Most Popular Item</h2>
        <Menus/>
    </div>
  );
};

export default Product;
