import React from "react";
import "./Dropdown.css";
import drop_down from "../Assets/drop_down_icon.png";

const Dropdown = (props) => {
  return (
    <div className="drow_menu_container">
      <button>
        <img src={drop_down} alt="icon" />
      </button>
      <ul className="drop_menu_content">
        {props.links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
