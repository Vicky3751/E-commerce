import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductDetails from './product-details/ProductDetails'
import UserDetails from './user-details/UserDetails'
const MiscRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/404" />} />
      <Route path="/user/*" element={<UserDetails />} />
      <Route path="/product/*" element={<ProductDetails />} />
    </Routes>
  )
}

export default MiscRoutes