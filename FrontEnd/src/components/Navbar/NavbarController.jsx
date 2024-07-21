import React from "react";
import { useLocation } from "react-router-dom";
import UserNavbar from "../Layout/UserNavbar";
import AdminNavBar from "../Admin/AdminNavBar";

const NavbarController = () => {
  const location = useLocation();

  const isAdminPath = location.pathname.includes("/admin");

  return isAdminPath ? <AdminNavBar /> : <UserNavbar />;
};

export default NavbarController;
