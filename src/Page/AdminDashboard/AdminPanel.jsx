import React from "react";
import { useState } from "react";
import style from "./AdminPanle.module.css";
import CreateMenu from "./CreateMenu";
import Menus from "./Menus";

//import product_image from "../Assets/product_image.png";
//import star from "../Assets/star.png";
import Order from "./Order";
import OrderedTransactions from "./OrderTransactions";

const menudemo = [

];

const orderDemo = [
  
];

const AdminPanel = () => {
  const [current, setCurrent] = useState("createMenu");
  return (
    <div className={style.adminpanel}>
      <div className={style.menuBar}>
        <ul>
          <li
            className={`${current === "createMenu" ? style.active : null}`}
            onClick={() => setCurrent("createMenu")}
          >
            Create menu
          </li>
          <li
            className={`${current === "Menu" ? style.active : null}`}
            onClick={() => setCurrent("Menu")}
          >
            Menus
          </li>
          <li
            className={`${current === "order" ? style.active : null}`}
            onClick={() => setCurrent("order")}
          >
            Order
          </li>
        </ul>
      </div>
      <div className={style.adminBar}>
        <div className={`${current === "createMenu" ? style.active : null}`}>
          <CreateMenu />
        </div>
        <div className={`${current === "Menu" ? style.active : null}`}>
          {" "}
          <div className={style.menu}>
              <Menus />
          </div>
        </div>
        <div className={`${current === "order" ? style.active : null}`}>
          {" "}
          <div className={style.order}>
            <OrderedTransactions/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
