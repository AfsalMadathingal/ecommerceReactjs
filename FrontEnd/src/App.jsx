import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<div className='bg-red-500'>Home</div>} />
      <Route path="/about" element={<div className='bg-red-500'>About</div>} />
    </Routes>
    </>
  )
}

export default App
