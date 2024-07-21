import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../Hook/UseAuth';


const PrivateRouteAdmin = () => {

   const {isAdminLogin} = useAuth();

  

    return ( isAdminLogin ? <Outlet/> : <Navigate to="/admin/login"/>)
};

export default PrivateRouteAdmin;
