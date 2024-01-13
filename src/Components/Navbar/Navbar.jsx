import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import logo from "../Assets/logo_icon.png";
import cart from "../Assets/cart_icon.png";
import search_icon from "../Assets/search.png";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if 'role' key exists in localStorage
    const role = localStorage.getItem("role");
    if (role) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Remove 'role' key from localStorage on Logout click
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const menu = ["Breakfast", "Lunch", "Dinner", "Others"];
  const services = [
    "Wedding Reception",
    "Social Event",
    "Corporate Event",
    "Holiday Party",
  ];
  const gallery = ["A", "B", "C"];
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>Foodi</p>
      </div>
      <ul className="nav-links">
        {" "}
        <li>
          {" "}
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" style={{ textDecoration: "none", color: "inherit" }}>
            Menu
          </Link>
          <Dropdown links={menu} />
        </li>
        <li>
          <Link
            to="/reservation"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            Reservation
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            Services
          </Link>
          <Dropdown links={services} />
        </li>
        {/* <li>
          <Link
            to="/gallery"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            Gallery
          </Link>
          <Dropdown links={gallery} />
        </li> */}
        <li>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            Contact
          </Link>
        </li>
      </ul>

      <ul className="searchBar">
        {/* <li className="search">
          <input type="text" name="search" id="search" />
          <img src={search_icon} alt="icon" />
        </li>{" "} */}
        <li>
          <Link to="/cart">
            {/* <img src={cart} alt="cart" /> */}
         <Button text={"My order"}/>
          </Link>
          {/* <p className="counter">0</p> */}
        </li>
        <li>
          {isLoggedIn ? (
            <Button text="Logout" handleClick={handleLogout} />
          ) : (
            <Button text="Login" handleClick={handleLoginClick} />
          )}
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
