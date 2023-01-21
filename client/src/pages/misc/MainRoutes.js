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
import Article from './Articles/Article'
import Cart from './Cart/Cart'
const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/articles/*" element={<Articles />} />
        <Route path="/article/*" element={<Article />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/products/*" element={<ProductRoutes />} />
        <Route path="/about/*" element={<AboutUs />} />
        <Route path="/contact/*" element={<ContactUs />} />
        <Route path="/cart/*" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default MainRoutes