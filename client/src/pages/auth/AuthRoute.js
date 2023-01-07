import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ForgotPassword from './forgot-password/ForgotPassword'
import Login from './login/Login'
import Register from './register/Register'
import '../../assets/styles/Auth.css'
const AuthRoute = () => {
    return (
        <>
            <div className="row auth-box">
                <div className="col-md-6 p-0">
                        <img width='100%' height="100%" src={require("../../assets/images/product.jpg")} alt="" />
                </div>
                <div className="col-md-6">
                    <Routes>
                        <Route path="/*" element={<Navigate to="login" />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot" element={<ForgotPassword />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </div>
            <img className='auth-logo' width={100} height={25} src={require("../../assets/images/logo.png")} alt="" />
        </>
    )
}

export default AuthRoute