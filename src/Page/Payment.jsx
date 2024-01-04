import React from "react";
import style from "../Css/Payment.module.css";
import visa from "../Components/Assets/payment/visa.png";
import bkash from "../Components/Assets/payment/bikash.png";
import nagad from "../Components/Assets/payment/nagad.png";
import bread from "../Components/Assets/payment/bread.png";
import cookie from "../Components/Assets/payment/cookies.png";
import cake from "../Components/Assets/payment/cake.png";
import fry from "../Components/Assets/payment/chicken fry.png";
import salad from "../Components/Assets/payment/salad.png";
import upArrow from "../Components/Assets/upArrow.png";
import downArrow from "../Components/Assets/downArrow.png";
import crossIcon from "../Components/Assets/crosIcon.png";

const Payment = () => {
  return (
    <div className={style.payment}>
      <section className={style.paymentSection}>
        <form className={style.paymentContainer}>
          <div className={style.paymentContainerOne}>
            <div className={style.paymentType}>
              <h3 className={style.method}>Payment Method</h3>
              <div className={style.cardDiv}>
                <div className={style.cardContainer}>
                  <div className={style.card}>
                    <div className={style.cardContent}>
                      <div className={style.circle}></div>
                      <div className={style.paymentImg}>
                        <img src={visa} />
                        <img src={visa} />
                        <img src={visa} />
                      </div>
                    </div>
                  </div>
                  <div className={style.card}>
                    <div className={style.circle}></div>
                    <img src={bkash} />
                  </div>
                  <div className={style.card}>
                    <div className={style.circle}></div>
                    <img src={nagad} />
                  </div>
                  <div className={style.card}>
                    <div className={style.circle}></div>
                    Cash ON Delivery
                  </div>
                </div>
              </div>
            </div>
            <div className={style.paymentType}>
              <h3 className={style.method}>Billing Details</h3>
              <div className={style.cardDiv}>
                <div className={style.cardContainer2}>
                  <div className={style.input1}>
                    <p className={style.inputText}>First Name*</p>
                    <input type="text" placeholder="Enter your fast name" />
                  </div>
                  <div className={style.input1}>
                    <p className={style.inputText}>Second Name*</p>
                    <input type="text" placeholder="Enter your fast name" />
                  </div>
                  <div className={style.input1}>
                    <p className={style.inputText}>Email*</p>
                    <input type="text" placeholder="Enter your fast name" />
                  </div>
                  <div className={style.input1}>
                    <p className={style.inputText}>Phone Number*</p>
                    <input type="text" placeholder="Enter your fast name" />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.paymentType}>
              <h3 className={style.method}>Shipping Details</h3>
              <div className={style.cardDiv}>
                <div className={style.cardContainer3}>
                  <div className={style.input2}>
                    <p className={style.inputText}>Street address*</p>
                    <input type="text" placeholder="Enter your fast name" />
                  </div>
                  <div className={style.threeInput}>
                    <div className={style.input3}>
                      <p className={style.inputText}>City*</p>
                      <input type="text" placeholder="Enter your fast name" />
                    </div>
                    <div className={style.input3}>
                      <p className={style.inputText}>Country*</p>
                      <input type="text" placeholder="Enter your fast name" />
                    </div>
                    <div className={style.input3}>
                      <p className={style.inputText}>Zip/Costal</p>
                      <input
                        type={style.text}
                        placeholder="Enter your fast name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className={style.cookies} src={cookie} />
          </div>

          <div className={style.paymentContainerTwo}>
            <h3 className={style.paymentHeader}>Order Summary</h3>
            <div className={style.upper}>
              <div className={style.tittle}>
                <p className={style.product}>Product</p>
                <p className={style.price2}>Price</p>
                <p className={style.total}>Total</p>
              </div>
              <div className={style.tittleDescription}>
                <div className={style.breadInfo}>
                  <img src={bread} />
                  <div className={style.addRemove}>
                    <p className={style.breadText}>Bread</p>
                    <div className={style.numberIcon}>
                      <div className={style.number}>1</div>
                      <div className={style.icon}>
                        <img src={upArrow} alt="" />
                        <img src={downArrow} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className={style.price}>$10</p>
                <p className={style.price}>$20</p>
                <div className={style.lastIcon}>
                  <img src={crossIcon} alt="" />
                </div>
              </div>
              <div className={style.horaizontl}></div>
              <div className={style.tittleDescription}>
                <div className={style.breadInfo}>
                  <img src={cake} />
                  <div className={style.addRemove}>
                    <p className={style.breadText}>Bread</p>
                    <div className={style.numberIcon}>
                      <div className={style.number}>1</div>
                      <div className={style.icon}>
                        {" "}
                        <img src={upArrow} alt="" />
                        <img src={downArrow} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className={style.price}>$10</p>
                <p className={style.price}>$20</p>
                <div className={style.lastIcon}>
                  <img src={crossIcon} alt="" />
                </div>
              </div>
              <div className={style.horaizontal}></div>
              <div className={style.tittleDescription}>
                <div className={style.breadInfo}>
                  <img src={fry} />
                  <div className={style.addRemove}>
                    <p className={style.breadText}>Bread</p>
                    <div className={style.numberIcon}>
                      <div className={style.number}>1</div>
                      <div className={style.icon}>
                        <img src={upArrow} alt="" />
                        <img src={downArrow} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className={style.price}>$10</p>
                <p className={style.price}>$20</p>
                <div className={style.lastIcon}>
                  <img src={crossIcon} alt="" />
                </div>
              </div>
              <div className={style.horaizontl}></div>
              <div className={style.tittleDescription}>
                <div className={style.breadInfo}>
                  <img src={salad} />
                  <div className={style.addRemove}>
                    <p className={style.breadText}>Bread</p>
                    <div className={style.numberIcon}>
                      <div className={style.number}>1</div>
                      <div className={style.icon}>
                        {" "}
                        <img src={upArrow} alt="" />
                        <img src={downArrow} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className={style.price}>$10</p>
                <p className={style.price}>$20</p>
                <div className={style.lastIcon}>
                  <img src={crossIcon} alt="" />
                </div>
              </div>
            </div>

            <div className={style.lower}>
              <div className={style.textPrice}>
                <div className={style.priceChart}>
                  <div className={style.price1}>Subtotal</div>
                  <div className={style.price3}> Delivery Fee</div>
                  <div className={style.price1}>Vat : [10%] </div>
                  <div className={style.price3}>Total </div>
                  <div className={style.price1}> $50</div>
                  <div className={style.price3}>$50 </div>
                  <div className={style.price1}>$50 </div>
                  <div className={style.price3}> $50</div>
                </div>
                <input
                  className={style.confirm}
                  type="submit"
                  value="Confirm & Pay"
                />
              </div>
            </div>
          </div>
        </form>

        <div className={style.images}>
          <img src={bread} />
          <img src={cake} />
          <img src={salad} />
          <img src={fry} />
        </div>
      </section>
    </div>
  );
};

export default Payment;
