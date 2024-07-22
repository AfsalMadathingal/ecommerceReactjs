import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./components/Products/ProductDetails";
import NavbarController from "./components/Navbar/NavbarController";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = React.lazy(() => import("./pages/Admin/Dashboard"));
const LoginForm = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const AdminLogin = React.lazy(() => import("./pages/Admin/AdminLogin"));

function App() {
  return (
    <>
        <ToastContainer />
        <NavbarController />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route
              path="/admin/login"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AdminLogin />
                </Suspense>
              }
            />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route
              path="/admin/dashboard"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Route>
          <Route  element={<PublicRoute user={true}/>}>
          <Route
            path="/login"
            element={
              <Suspense fallback={<div >Loading...</div>}>
                <LoginForm />
              </Suspense>
            }
          />
          </Route>
          <Route element={<PublicRoute user={true}/>}>
          <Route
            path="/register"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Register />
              </Suspense>
            }
          />
          </Route>
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
