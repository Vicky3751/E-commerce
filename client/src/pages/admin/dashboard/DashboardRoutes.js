import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import OrdersDashboard from './orders-dashboard/OrdersDashboard'
import ProductDashboard from './product-dashboard/ProductDashboard'
import UserDashboard from './user-dashboard/UserDashboard'
const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="users" />} />
            <Route path="/users" element={<UserDashboard />} />
            <Route path="/products" element={<ProductDashboard />} />
            <Route path="/orders" element={<OrdersDashboard />} />
        </Routes>
    )
}

export default DashboardRoutes