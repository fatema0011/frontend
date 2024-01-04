import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <p className="welcome">Welcome To Foodi</p>
        <h1>We Deliver The Test Of Life</h1>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            obcaecati culpa soluta esse.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="btn">
          <Button text="ORDER NOW" />
          <Button var="sec" text="BOOK A TABLE" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image} alt="heroimage" />
      </div>
    </div>
  );
};

export default Hero;
