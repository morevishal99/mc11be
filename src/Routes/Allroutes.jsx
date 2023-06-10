import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmiCalculator from '../Page/EmiCalculator'
import Login from '../Page/Login'
import Profile from '../Page/Profile'
import Register from '../Page/Register'

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/emi_calculator" element={<EmiCalculator />} />

        </Routes>
    )
}

export default Allroutes
