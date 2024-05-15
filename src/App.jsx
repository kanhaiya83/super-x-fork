import React, { useState, useEffect } from 'react';
import './assets/css/App.css';
import './assets/css/tailwind.css';
import { Routes , Route, useNavigate, useLocation}from 'react-router-dom';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import LoginPage from './pages/LoginPage';
import { useAuthContext } from './context/authContext';
function App() {
  const [openModal, setOpenModal] = useState(false);
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const unauthenticatedRoutes  = ["/","/login","/privacy-policy"]
  useEffect(() => {
    if (!loading && !user && !unauthenticatedRoutes.includes(pathname) && !pathname.includes("admin")) {
      navigate("/");
    }
  }, [user, loading]);
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/dashboard/*' element={<Dashboard></Dashboard>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
  
    </>
  )

}


export default App;
