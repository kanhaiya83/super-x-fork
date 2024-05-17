import { useState, useEffect } from 'react';
import './assets/css/App.css';
import './assets/css/tailwind.css';
import { Routes , Route, useNavigate, useLocation}from 'react-router-dom';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import LoginPage from './pages/LoginPage';
import { useAuthContext } from './context/authContext';
import AdminLogin from './components/AdminPage/AdminLogin';
import CouponsPanel from './components/AdminPage/CouponsPanel';
import UsersPanel from './components/AdminPage/UsersPanel';
import PromptPanel from './components/AdminPage/PromptPanel';
import StatsPage from './components/AdminPage/StatsPage';
import AdminLayout from './components/AdminPage/AdminLayout';
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
      <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin/>}/>
          <Route path="coupons" element={<CouponsPanel/>}/>
          <Route path="" element={<UsersPanel/>}/>
          <Route path="prompt" element={<PromptPanel/>}/>
          <Route path="stats" element={<StatsPage/>}/>
        </Route>
    </Routes>
  
    </>
  )

}


export default App;
