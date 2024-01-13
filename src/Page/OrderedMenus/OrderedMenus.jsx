import React, { useState, useEffect } from 'react';
import styles from './OrderedMenus.module.css'; // Import CSS module
import Button from '../../Components/Button/Button';

const OrdersWithMenuDetails = () => {
  const [ordersWithMenus, setOrdersWithMenus] = useState([]);

  useEffect(() => {
    const fetchOrdersWithMenus = async () => {
      try {
        // Fetch orders with menu details for the specific userId
        const response = await fetch(`http://localhost:5000/customer/orders`, {
          credentials: "include"
        });
        const data = await response.json();
        console.log(data)
        setOrdersWithMenus(data);
      } catch (error) {
        console.error('Error fetching orders with menu details:', error);
      }
    };

    fetchOrdersWithMenus();
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    ordersWithMenus.forEach(order => {
      totalPrice += order.menu?.price || 0; // Adding menu price to the total
    });
    return totalPrice;
  };

  const totalOrderPrice = calculateTotalPrice();

  const handlePayment = async () => {
    try {
      const orderIds = ordersWithMenus.map(order => order._id);
      const totalPrice = totalOrderPrice;

      const response = await fetch('http://localhost:5000/customer/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ orderIds, totalPrice }),
        credentials: "include"
      });

      if (response.ok) {
        const successData = await response.json();
        const gatewayPageURL = successData.GatewayPageURL;
        window.open(gatewayPageURL, "_blank");
      } else {
        // Handle payment failure
        console.error('Payment failed.');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h1>Ordered Menus</h1>
      <table className={styles['orders-table']}>
        {/* Table headers */}
        <thead>
          
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Menu  ID</th>
            <th> Menu Name</th>
            <th>Price</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersWithMenus.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user.name}</td>
              <td>{order.menuId}</td>
              {/* <td>{order.menuId}</td> */}
              <td>{order.menu && order.menu.title}</td>
              <td>{order.menu && order.menu.price}</td>
              <td>{order.menu && order.payment ? 'Payment Completed' : 'Payment Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    <div className={styles.payment}>
    <p className={styles['total-price']}>Total Price of All Orders: {totalOrderPrice}</p>
      <button className={styles.btn} onClick={handlePayment}>Process Payment</button>
    </div>
      
    </div>
  );
};

export default OrdersWithMenuDetails;
