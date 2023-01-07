import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import OrderDetails from './order-details/OrderDetails'
import ProductDetails from './product-details/ProductDetails'
import UserDetails from './user-details/UserDetails'
const MiscRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/404" />} />
      <Route path="/user/*" element={<UserDetails />} />
      <Route path="/product/*" element={<ProductDetails />} />
      <Route path="/order/*" element={<OrderDetails />} />
    </Routes>
  )
}

export default MiscRoutes