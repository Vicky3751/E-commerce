import React from 'react'
import { Navigate } from "react-router-dom";
const AuthGuard = ({ isLoggedIn, children }) => {
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        return <Navigate to="/auth/login" replace />;
    }
    return children;
}

export default AuthGuard

