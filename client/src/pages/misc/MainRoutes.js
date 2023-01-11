import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "../../common/Header"
import Footer from "../../common/Footer"
import Articles from './Articles/Articles'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import ProductRoutes from './Product/ProductRoutes'
import AboutUs from './Others/AboutUs'
import ContactUs from './Others/ContactUs'
const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/articles/*" element={<Articles />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/products/*" element={<ProductRoutes />} />
        <Route path="/about/*" element={<AboutUs />} />
        <Route path="/contact/*" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default MainRoutes