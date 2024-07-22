import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'


const PublicRouteAdmin = ({ user=false}) => {


  const adminToken = localStorage.getItem('adminToken');
  const userToken = localStorage.getItem('userToken');

  if(user){
    return ( userToken ? <Navigate to="/"/> : <Outlet/> )
   }
  return ( adminToken ? <Navigate to="/admin/dashboard"/> : <Outlet/> )
  
}

export default PublicRouteAdmin
