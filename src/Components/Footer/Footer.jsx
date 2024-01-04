import React from "react";
import style from "./Footer.module.css";
import logo from "../Assets/logo_icon.png";
import right_arrow from "../Assets/right_arrow.png";
import fb from "../Assets/fb.png";
import twitter from "../Assets/twitter.png";
import linkedIn from "../Assets/linkedIn.png";
import instagram from "../Assets/insta.png";
import top_arrow from "../Assets/top_arrow.png";
const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div className={style.footer}>
        <div className={style.logo_bar}>
          <div className={style.logo}>
            <img src={logo} alt="logo" />
            <p>Foodi</p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown{" "}
          </p>
          <div className={style.icons}>
            <div>
              <img src={fb} alt="facebook" />
            </div>
            <div>
              <img src={twitter} alt="twitter" />
            </div>
            <div>
              <img src={linkedIn} alt="linkedIn" />
            </div>
            <div>
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
        <div className={style.opening}>
          <h3>Opening Restaurent</h3>
          <p>
            Sa-We : 09:00am-10:00pm <br /> Thursday : 09:00am-05:00pm <br />{" "}
            Friday : Closed
          </p>
        </div>
        <div className={style.UserLink}>
          <h3>User Link</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Order Delivery</li>
            <li>Payment & Tax</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div className={style.ContactUs}>
          <h3>Contact Us</h3>
          <p>
            567 Country Street Ave <br /> RK 7899,London,UK <br />{" "}
            +0044843462372992
          </p>
          <div className={style.search_email}>
            <input type="email" name="email" id="email" />
            <img src={right_arrow} alt="right_arrow" />
          </div>
        </div>
      </div>
      <hr />

      <div className={style.copy_right}>
        <div>
          <img src={top_arrow} alt="top_arrow" />
        </div>
        <p>Copyright 2022@Foodi, All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
