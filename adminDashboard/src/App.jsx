import React from 'react'
import AdminDashboard from './Admin'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './Login'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  )
}

export default App
