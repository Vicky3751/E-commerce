import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardRoutes from './dashboard/DashboardRoutes'
import MiscRoutes from './misc/MiscRoutes'
import ReportRoutes from './reports/ReportRoutes'
import SideBar from "../../common/SideBar"
import "../../assets/styles/Admin.css"
import ReportedUsers from './misc/reported-users/ReportedUsers'
import FraudProducts from './misc/fraud-products/FraudProducts'
const AdminRoute = () => {
  return (
    <>
      <div className="d-flex admin-box">
        <div className="sidebar-box">
          <SideBar/>
        </div>
        <div className="main-box">
          <Routes>
            <Route path="/*" element={<Navigate to="dashboard" />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
            <Route path="/reports/*" element={<ReportRoutes />} />
            <Route path="/details/*" element={<MiscRoutes />} />
            <Route path="/report/*" element={<ReportedUsers />} />
            <Route path="/fraud/*" element={<FraudProducts />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AdminRoute