import React, { useState, useEffect } from 'react';
import styles from './OrderTransactions.module.css';
import jsPDF from 'jspdf';

const OrderedTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/transactions', {
          credentials: 'include'
        });
        const data = await response.json();
        setTransactions(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const generateReport = (transaction) => {
    // Create a new PDF instance
    const pdf = new jsPDF();
    
    // Add transaction data to the PDF content
    pdf.text(`Transaction ID: ${transaction.tranId}`, 10, 10);
    pdf.text(`Order IDs: ${transaction.orderIds.join(', ')}`, 10, 20);
    pdf.text(`Payment Status: ${transaction.payment_status}`, 10, 30);
    pdf.text(`Total Amount: ${transaction.total_amount}`, 10, 40);
    pdf.text(`Created At: ${new Date(transaction.createdAt).toLocaleString()}`, 10, 50);
    pdf.text(`User Name: ${transaction.user.name}`, 10, 60);
    // Add other transaction data as needed
    


    // Save the PDF with a unique name (e.g., using the transaction ID)
    pdf.save(`Transaction_Report_${transaction.tranId}.pdf`);
  };

  return (
    <div>
      <h1>Transactions with Payment Complete</h1>
      <table className={styles['orders-table']}>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>User Name</th>
            <th>Order ID</th>
            <th>Payment Status</th>
            <th>Total Amount</th>
            <th>Created At</th>
            <th>Generate Report</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id.$oid}>
              <td>{transaction.tranId}</td>
              <td>{transaction.user.name}</td>
              <td>{transaction.orderIds.join(', ')}</td>
              <td>{transaction.payment_status ? 'Payment Completed' : 'Payment Pending'}</td>
              <td>{transaction.total_amount}</td>
              <td>{new Date(transaction.createdAt).toLocaleString()}</td>
              <td>
                <button className={styles.btn} onClick={() => generateReport(transaction)}>Generate Report</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderedTransactions;
