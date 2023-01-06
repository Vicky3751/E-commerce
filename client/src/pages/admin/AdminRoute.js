import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardRoutes from './dashboard/DashboardRoutes'
import MiscRoutes from './misc/MiscRoutes'
import ReportRoutes from './reports/ReportRoutes'

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="dashboard" />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="/reports/*" element={<ReportRoutes />} />
      <Route path="/details/*" element={<MiscRoutes />} />
    </Routes>
  )
}

export default AdminRoute