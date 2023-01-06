import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductReports from './product-reports/ProductReports'
import UserReports from './user-reports/UserReports'
const ReportRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="users" />} />
            <Route path="/users" element={<UserReports />} />
            <Route path="/products" element={<ProductReports />} />
        </Routes>
    )
}

export default ReportRoutes