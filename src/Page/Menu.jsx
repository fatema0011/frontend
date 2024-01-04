import React from "react";
import items from "../Components/Assets/Data";
import style from "../Css/Menu.module.css";
import Item from "../Components/Item";
import Button from "../Components/Button/Button";

const Menu = () => {
  return (
    <div className={style.menuWrapper}>
      <div className={style.banner}>
        <h2>Our Menu</h2>
        <p>Fresh & Delicios</p>
      </div>
      <div>
        <ul className={style.menuContainer}>
          <li className="all">
            <a href="#">ALL</a>
          </li>
          <li>
            <a href="#breakfast">BREAKFAST</a>
          </li>
          <li>
            <a href="#lunch">LUNCH</a>
          </li>
          <li>
            <a href="#dinner">DINNER</a>
          </li>
          <li>
            <a href="#desert">DESSERTS</a>
          </li>
          <li>
            <a href="#">OTHERS</a>
          </li>
        </ul>
        <section className={style.itemSection} id="breakfast">
          <div className={style.itemHeader}>
            <p className={style.itemHeaderTitle}>
              <b>Breakfast</b>
            </p>
          </div>
          <div className={style.items}>
            {items.map((e) => (
              <Item Items={e} />
            ))}
          </div>
          <div className={style.itemViewBtn}>
            <Button text={"View All Button"} />
          </div>
        </section>
        <section className={style.lunchSection} id="lunch">
          <div className={style.lunchHeader}>
            <p className={style.lunchHeaderTitle}>
              <b>Lunch</b>
            </p>
          </div>
          <div className={style.items}>
            {items.map((e) => (
              <Item Items={e} />
            ))}
          </div>
          <div className={style.itemViewBtn}>
            <Button text={"View All Button"} />
          </div>
        </section>
        <section className={style.itemSection} id="dinner">
          <div className={style.itemHeader}>
            <p className={style.itemHeaderTitle}>
              <b>Dinner</b>
            </p>
          </div>
          <div className={style.items}>
            {items.map((e) => (
              <Item Items={e} />
            ))}
          </div>
          <div className={style.itemViewBtn}>
            <Button text={"View All Button"} />
          </div>
        </section>
        <section className={style.lunchSection} id="desert">
          <div className={style.lunchHeader}>
            <p className={style.lunchHeaderTitle}>
              <b>Deserts</b>
            </p>
          </div>
          <div className={style.items}>
            {items.map((e) => (
              <Item Items={e} />
            ))}
          </div>
          <div className={style.itemViewBtn}>
            <Button text={"View All Button"} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
