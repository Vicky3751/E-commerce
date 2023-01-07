import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthGuard from './middleware/Guard/AuthGuard';
import AuthRoute from './pages/auth/AuthRoute';
import AdminRoute from './pages/admin/AdminRoute';
import MainRoutes from './pages/misc/MainRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/*" exact={true} element={<AuthGuard isLoggedIn={true}><MainRoutes /></AuthGuard>} />
        <Route path="/auth/*" element={<AuthRoute />} />
        <Route path="/admin/*" element={<AuthGuard isLoggedIn={true}><AdminRoute /></AuthGuard>} />
      </Routes>
    </Router>
  );
}

export default App;
