import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';



const PrivateRouteAdmin = () => {

   const adminToken = localStorage.getItem('adminToken');
  
    return ( adminToken ? <Outlet/> : <Navigate to="/admin/login"/>)
};

export default PrivateRouteAdmin;
