import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "../Css/Reservation.module.css";
import phn from "../Components/Assets/phone.png";
import juice from "../Components/Assets/juice.png";
import snaks from "../Components/Assets/snacks.png";
import note from "../Components/Assets/note.png";
import pizza from "../Components/Assets/pizza.png";
import { useState } from "react";
const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    event: "",
    numberOfPersons: 0,
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "http://localhost:5000/customer/reservations",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Show success notification
    toast.success("Reservation submitted successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });

  } catch (error) {
    // Show error notification
    toast.error("An error occurred while submitting the reservation", {
      position: toast.POSITION.TOP_RIGHT,
    });

    console.error('Error:', error);
  }
};
  return (
    <div>
      <div className={style.reservationContainer}>
        <div className={style.reservationContent}>
          <div className={style.phone}>
            <img className={style.phn} src={phn} />
            <div className={style.phneText}>
              <h4>Book A Table Via Phone</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sit felis massa ornare
                id. Orci varius scelerisque aenean +00448434623729
              </p>
            </div>
          </div>
          <img className="juice" src={juice} />
          <img className="snacks" src={snaks} />
          <div className={style.note}>
            <img src={note} />
            <div className={style.noteText}>
              <h4>Book A Table Via Online Form</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sit felis massa ornare
                id.Orci varius scelerisque aenean ultrices.
              </p>
            </div>
          </div>
        </div>

        <div id="reservation">
          <div className={style.reservationHeader}>
            <h2>Book A Table</h2>
            <p>Make Your Reservation</p>
          </div>
          <h4 className={style.heading}>Reservation Form</h4>
          <div id={style.reservationContainer}>
            <img className="leftImage" src={pizza} />
            <div className={style.cardContent}>
              <form className={style.reservationForm} onSubmit={handleSubmit}>
                <div className={style.reservationInputGroup}>
                  <div className={style.reservationInfoInputGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Email address"
                      onChange={handleInputChange}
                    />
                    <div className={style.icon}>
                      <input
                        type="text"
                        name="event"
                        placeholder="Event"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className={style.reservationUserInfoGroup}>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      onChange={handleInputChange}
                    />
                    <div className={style.icon1}>
                      <input
                        type="text"
                        name="numberOfPersons"
                        placeholder="Person"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={style.icon1}>
                      <input
                        type="time"
                        name="time"
                        placeholder="time"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={style.icon1}>
                      <input
                        type="date"
                        name="date"
                        placeholder="date"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.bookedBtnContainer}>
                  <button type="submit" className={style.bookedBtn}>
                    Booked Now
                  </button>
                </div>
              </form>
            </div>
            {/* <img className="rightImage" src="images/reservation/men.png" /> */}
          </div>
        </div>
      </div>
      {/* <Payment /> */}
    </div>
  );
};

export default Reservation;
