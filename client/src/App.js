import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthGuard from './middleware/Guard/AuthGuard';
import AuthRoute from './pages/auth/AuthRoute';
import AdminRoute from './pages/admin/AdminRoute';
import MainRoutes from './pages/misc/MainRoutes';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };


  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthGuard isLoggedIn={isLoggedIn}><MainRoutes /></AuthGuard>} />
        <Route path="/auth/*" element={<AuthRoute />} />
        <Route path="/admin/*" element={<AuthGuard isLoggedIn={isLoggedIn}><AdminRoute /></AuthGuard>} />
      </Routes>
    </Router>
  );
}

export default App;
