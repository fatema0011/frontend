import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const CustomerPrivateRoutes = () => {
  const role = localStorage.getItem('role'); // Fetch user's role from localStorage
  // Render the routes based on the user's role
  return role === 'customer' ? <Outlet /> : <Navigate to="/login" />;
};

export default CustomerPrivateRoutes;

