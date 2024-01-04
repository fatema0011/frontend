import React, { useState } from "react";
import style from "../Css/Login.module.css";
import Login_left from "../Components/Assets/login_left.png";
import fb_icon from "../Components/Assets/facebookIcon.png";
import insta_icon from "../Components/Assets/instagramIcon.png";
import google from "../Components/Assets/googleIcon.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/customer/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data submitted successfully, you can redirect or show a success message.
        console.log("Data submitted successfully");
      } else {
        // Handle error cases
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={style.loginPage}>
      <div className={style.baner}>
        <p>Sign UP</p>
      </div>
      <div className={style.loginContainer}>
        <div className={style.loginLeft}>
          <img src={Login_left} alt="login_left" />
        </div>
        <div className={style.loginRight}>
          <p>Sign Up</p>
          <p>Welcome Back</p>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.name}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={style.email}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={style.password}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <input className={style.btn} type="submit" value="Continue" />
            </div>
          </form>
          <div className={style.contactWith}>
            <p>Continue With</p>
            <div className={style.contactIcon}>
              <div>
                <img src={fb_icon} alt="" />
              </div>
              <div>
                <img src={google} alt="" />
              </div>
              <div>
                <img src={insta_icon} alt="" />
              </div>
            </div>
            <p className={style.alreadyHave}>
              Already have an account?{" "}
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
