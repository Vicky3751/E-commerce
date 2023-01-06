import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardRoutes from './dashboard/DashboardRoutes'
import ReportRoutes from './reports/ReportRoutes'

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="dashboard" />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="/reports/*" element={<ReportRoutes />} />
    </Routes>
  )
}

export default AdminRoute