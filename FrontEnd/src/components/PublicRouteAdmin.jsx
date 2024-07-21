import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
import useAuth from '../Hook/UseAuth'

const PublicRouteAdmin = () => {

    const {isAdminLogin} = useAuth();

  return ( isAdminLogin ? <Navigate to="/admin/dashboard"/> : <Outlet/> )
  
}

export default PublicRouteAdmin
