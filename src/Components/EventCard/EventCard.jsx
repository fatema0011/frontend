import React from "react";
import style from "../EventCard/EventCard.module.css";
import Button from "../Button/Button";

const EventCard = (Props) => {
  const { title, desc, img } = Props.data;
  return (
    <div className={style.card}>
      <div className={style.cardImage}>
        <img src={img} alt="imgae" />
      </div>
      <div className={style.cardContent}>
        <p className={style.cardTitle}>{title}</p>
        <p className={style.cardDescription}>{desc}</p>
        <div className={style.cardButton}>
          <Button text={"Get Started"} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
