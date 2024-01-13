import React from "react";
import style from "./Discover.module.css";
import { discover_items } from "../Assets/Data";

const Discover = () => {
  return (
    <div className={style.discover}>
      <p>Discover</p>
      <h2>Our Specialist Cuisine</h2>
      <div className={style.items}>
        {discover_items.map((e, i) => (
          <div key={i} className={style.item}>
            <div className={style.logo}>
              <img src={e.image} alt="logo" />
            </div>
            <div className={style.text}>
              <p className={style.title}>{e.title}</p>
              <p className={style.desc}>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
