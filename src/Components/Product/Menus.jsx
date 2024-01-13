import React, { useState, useEffect } from "react";
import style from "./Menus.module.css";
import AddToCart from "../AddToCart/Button";

const Menus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    // Fetch menu items from the backend
    fetch("http://localhost:5000/customer/menu/all", {
      credentials:"include"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenus(data); // Update state with fetched menu items
      })
      .catch((error) => {
        console.error("Error fetching menus:", error);
      });
  }, []);
  const handleAddToCart = async (menuId, userId) => {
    try {
      const response = await fetch("http://localhost:5000/customer/orders/add", {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ menuId, userId })
      });

      if (response.ok) {
        console.log("Item added to cart successfully!");
        // Handle success if needed
      } else {
        console.error("Failed to add item to cart.");
        // Handle failure if needed
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      // Handle error if needed
    }
  };
  return (
    <div className={style.menuContainer}>
      {menus.map((menu, index) => (
        <div key={menu._id} className={style.item}>
          <img src={`http://localhost:5000/${menu.photo}`} width= "200px" height="200px"alt="Menu" />
          <p className={style.title}>{menu.title}</p>
          <p className={style.price}>${menu.price}</p>
        
          {/* <div className={style.rating}>
            ({menu.rating})
          </div> */}
          <div className={style.button}>
          <AddToCart
              text={"Add to Cart"}
              menuId={menu._id}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menus;
