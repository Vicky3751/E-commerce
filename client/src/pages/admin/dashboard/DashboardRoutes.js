import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductDashboard from './product-dashboard/ProductDashboard'
import UserDashboard from './user-dashboard/UserDashboard'
const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="users" />} />
            <Route path="/users" element={<UserDashboard />} />
            <Route path="/products" element={<ProductDashboard />} />
        </Routes>
    )
}

export default DashboardRoutes