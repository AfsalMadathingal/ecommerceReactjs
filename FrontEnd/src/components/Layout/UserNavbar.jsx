import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


export default function UserNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const userToken = localStorage.getItem('userToken');

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };


  const menuItems = [
    "Home",
    "All Products",
    "Log Out",
  ];

  return (
 
         <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">E-commerce</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link 
          className="cursor-pointer"
          onClick={() => navigate("/")}
          color="foreground" >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            All Products
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
         {userToken ? (
           <button 
           onClick={handleLogout}
           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Log Out
           </button>
         ):
         (
          <button 
           onClick={() => navigate("/register")}
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up
           </button>
         )
         }
         
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  
   
  );
}
