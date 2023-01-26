import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from './categories/Categories'
import Product from './product/Product'
import Products from './products/Products'

const ProductRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/item/*" element={<Product />} />
      </Routes>
  )
}

export default ProductRoutes