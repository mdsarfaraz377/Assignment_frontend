import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppointmentForm from './components/AppointmentForm.jsx'
import CalendarPage from './pages/CalendarPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import './App.css';

const App = () => {
  return (
    <div>
        
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/calender" element={<CalendarPage />} />
      <Route path="appointment-form" element={<AppointmentForm/>} />
      </Routes>
    </div>
  )
}

export default App
