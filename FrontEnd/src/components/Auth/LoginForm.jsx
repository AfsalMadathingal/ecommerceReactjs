import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {login as authLogin} from '../../auth/authService';

const LoginForm = () => {
  const navigate = useNavigate();
  const [mobile , setMobile] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async () => {
    
    console.log(mobile, password);
    try {
      await authLogin(mobile,password);
      navigate('/');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };


  return (
    <div className=" h-screen flex flex-col justify-center bg-gradient-to-r from-[#000000] via-[#4f0227] to-[#000000]">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 md:w-[450px] bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5 justify-center">
              <p className="text-3xl font-bold text-gray-800">Login</p>
            </div>
            <div className="mt-5">
              <form action="">

              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="mobile"
              >
                Mobile
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                autoComplete="off"
                id="mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="password"
               
              >
                Password
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              </form>
             
            </div>
            <div className="text-right mb-4">
              <a
                className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <div className="mt-5">
              <button
                onClick={() => handleLogin()}
                className="py-2 px-4 bg-[#4f0227] hover:bg-red-900 focus:ring-red-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Log in
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <a
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline cursor-pointer"
                onClick={() => navigate("/register")}
              >
                or sign up
              </a>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
