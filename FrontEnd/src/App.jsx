import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import LoginForm from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AdminLogin from './pages/Admin/AdminLogin';


function App() {


  return (
    <>
    <Routes>
      <Route path='/admin/login' element={<AdminLogin/>}/>
      <Route path="/login" element= {<LoginForm/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/about" element={<div className='bg-red-500'>About</div>} />
    </Routes>
    </>
  )
}

export default App
