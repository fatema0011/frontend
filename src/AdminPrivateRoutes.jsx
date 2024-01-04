import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminPrivateRoutes = () => {
  const role = localStorage.getItem('role'); // Fetch user's role from localStorage
  // Render the routes based on the user's role
  return role === 'admin' ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default  AdminPrivateRoutes;

