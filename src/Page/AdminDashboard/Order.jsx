import React from "react";
import Button from "../../Components/Button/Button";
import style from "./Order.module.css";
const Order = (props) => {
  const { name, email, address } = props.demo;
  console.log(props);
  return (
    <div className={style.orderContainer}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <address>{address}</address>
      <div className={style.button}>
        <Button text="Confirm" />
      </div>
    </div>
  );
};

export default Order;
