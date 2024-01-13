import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import CustomerPrivateRoutes from "./CustomerPrivateRoutes";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Login from "./Page/Login";

import Home from "./Page/Home";
import Menu from "./Page/Menu";
import Reservation from "./Page/Reservation";
import Services from "./Page/Services";
import Gallery from "./Page/Gallery";
import Contact from "./Page/Contact";
import Cart from "./Page/Cart";
import SignUp from "./Page/SignUp";
import AdminPanel from "./Page/AdminDashboard/AdminPanel";
import AdminPrivateRoutes from "./AdminPrivateRoutes";
import AdminLogin from "./Page/AdminLogin";
import AdminSignUp from "./Page/AdminSignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<CustomerPrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route element={<AdminPrivateRoutes />}>
            <Route path="/dashboard" element={<AdminPanel />} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/admin/signup" element={<AdminSignUp />} />
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
};

export default App;
