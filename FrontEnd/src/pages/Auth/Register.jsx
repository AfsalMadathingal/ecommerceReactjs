import React from "react";

const Register = () => {
  return (
    <div className="w-screen h-screen pt-16 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5 justify-center">
              <p className="text-3xl font-bold text-gray-800">Login</p>
            </div>
            <div className="mt-5">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="login"
              >
                Mobile
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="login"
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
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="password"
                id="password"
              />
            </div>
            <div className="text-right mb-4">
              <a
                className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                onClick={() => (window.location.href = "/login")}
              >
                Already have an account ? Login here
              </a>
            </div>

            <div className="mt-5">
              <button
                className="py-2 px-4 bg-purple-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
