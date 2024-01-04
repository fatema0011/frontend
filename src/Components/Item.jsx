import React from "react";
import style from "../Components/Item.module.css";
import Button from "./Button/Button";
const Item = (Props) => {
  const { image, title, price, rating } = Props.Items;
  console.log(Props.Items.image);
  return (
    <div>
      <div className={style.item}>
        <img src={image} alt="img" />
        <p className={style.title}>{title}</p>
        <p className={style.price}>{price}</p>
        <div className={style.rating}>
          <img src={rating} alt="rating" />
          (5)
        </div>
        <Button text={"Add To Cart"} />
      </div>
    </div>
  );
};

export default Item;
