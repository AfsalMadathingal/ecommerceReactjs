import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Layout/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./components/Products/ProductDetails";

const LoginForm = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const AdminLogin = React.lazy(() => import("./pages/Admin/AdminLogin"));

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<div className="bg-red-500">About</div>}
        />
        <Route
          path="/admin/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AdminLogin />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LoginForm />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetails />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
