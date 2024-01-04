import React, { useState } from "react";
import style from "../Css/Login.module.css";
import Login_bg from "../Components/Assets/login_Bg.png";
import LoginPage_bg from "../Components/Assets/loginPage_Bg.png";
import Login_left from "../Components/Assets/login_left.png";
import fb_icon from "../Components/Assets/facebookIcon.png";
import insta_icon from "../Components/Assets/instagramIcon.png";
import google from "../Components/Assets/googleIcon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/customer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials:"include"
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Ensure you get the response data including the token
        navigate('/')
        // Save token to localStorage
        if (data.role) {
          localStorage.setItem('role', data.role);
          console.log('Token saved in localStorage:', data.role);
        }
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
        <p>Login</p>
      </div>
      <div className={style.loginContainer}>
        <div className={style.loginLeft}>
          <img src={Login_left} alt="login_left" />
        </div>
        <div className={style.loginRight}>
          <p>Login</p>
          <p>Welcome Back</p>
          <form className={style.form} onSubmit={handleSubmit}>
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
              <input className={style.btn} type="submit" value="Login" />
            </div>
          </form>
          <div className={style.contactWith}>
            <p>Contact With</p>
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
              Don't have an account?{" "}
              <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
                <span>Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
