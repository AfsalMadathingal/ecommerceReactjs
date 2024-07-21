import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminLogin, setIsAdmin] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    const userToken = localStorage.getItem('userToken');

    setIsAdmin(adminToken ? true : false);

  }, []);

  const login = (role) => {
    setIsAuthenticated(true);
    setRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout ,isAdminLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
