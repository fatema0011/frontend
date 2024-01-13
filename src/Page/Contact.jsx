import React from "react";
import style from "../Css/Contact.module.css";
import contactman from "../Components/Assets/contacmen.png";
import burger from "../Components/Assets/contactbug.png";
import location from "../Components/Assets/location.png";
import mail from "../Components/Assets/mail.png";
import mobile from "../Components/Assets/mobile.png";


const Contact = () => {


  return (
    <div>
      <div className={style.banner}>
        <h2>Contact Us</h2>
        <p>Who We Are</p>
      </div>
      <div className={style.contactContainer}>
        <div className={style.contactText}>
          <p>
            Are you food lover? If your answer is yes, then this resturant for
            you.
            <br /> We serve foods for reasonable prices.It's awesome, we know.
          </p>
          <h4>Get in touch with us now!</h4>
        </div>
        <div className={style.contactForm}>
          <form 
          action="https://formspree.io/f/xzbnbjee"
           method="post"
           className={style.cardContent}>
            <input type="text" name="info" placeholder="Name" />
            <input type="text" name="info" placeholder="Your Email address" />
            <input type="text" name="info" placeholder="Your Phone Number" />
            
            <textarea
              className={style.msg}
              type="text"
              name="info"
              placeholder="Your Message"
            />
riya
            <div>
              <button className={style.btn} type="submit">Submit</button>
            </div>
          </form>
          <div className={style.contactImage}>
            <img src={contactman} />
          </div>
        </div>
        <div className={style.contactDetails}>
          <h4>Contact Details:</h4>
          <div className={style.contactIcon}>
            <div className={style.location}>
              <img src={location} alt="location" />
              <b>
                <p>567 Country Street Ave</p>
              </b>
              <b>
                {" "}
                <p>RK 7899,Canada</p>
              </b>
            </div>
            <div className={style.mobile}>
              <img src={mobile} alt="mobile" />
              <b>
                {" "}
                <p>+00448434623729</p>
              </b>
              <b>
                <p>+00448434623729</p>
              </b>
            </div>
            <div className={style.instagram}>
              <img src={mail} alt="mail" />
              <b>
                <p>Foodi@gmail.com</p>
              </b>
              <b>
                <p>Foodi@gmail.com</p>
              </b>
            </div>
          </div>
        </div>
        <div className={style.contactMapContainer}>
          <iframe
            className={style.contactMap}
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14593.259164516807!2d90.3778652!3d23.8784537!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1697968351264!5m2!1sen!2sbd"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no_referrer_when_downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
