import React from "react";
import style from "../Css/Services.module.css";
import EventCard from "../Components/EventCard/EventCard";
import img1 from "../Components/Assets/cardImg1.png";
import img2 from "../Components/Assets/cardimg2.png";
import img3 from "../Components/Assets/cardimg3.png";
import img4 from "../Components/Assets/cardimg4.png";
const Data = [
  {
    img: img1,
    title: "Wedding Reception",
    desc: "Gravida nascetur elementum gravida congue netus neque, dui. Sit eget mattis nisi lacus duis nulla",
  },
  {
    img: img2,
    title: "Social Event",
    desc: "Gravida nascetur elementum gravida congue netus neque, dui. Sit eget mattis nisi lacus duis nulla",
  },
  {
    img: img3,
    title: "Corporate Event",
    desc: "Gravida nascetur elementum gravida congue netus neque, dui. Sit eget mattis nisi lacus duis nulla",
  },
  {
    img: img4,
    title: "Holiday Party",
    desc: "Gravida nascetur elementum gravida congue netus neque, dui. Sit eget mattis nisi lacus duis nulla",
  },
];
const Services = () => {
  return (
    <div className={style.serviceContainer}>
      <div className={style.banner}>
        <h2>Our Services</h2>
        <p>Who We Are</p>
      </div>
      <div className={style.serviceContent}>
        <div>
          <p className={style.title}>Plan Your Event With Our Services</p>
          <p className={style.desc}>
            Gravida nascetur elementum gravida congue netus neque, dui. Sit eget
            mattis nisi lacus duis nulla <br /> accumsan viverra vulputate aut
            pretium.
          </p>
        </div>
        <div className={style.cardContainer}>
          {Data.map((e) => (
            <EventCard data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
