import {Link}from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const Navbar = () => {
  const { user } = useAuthContext();
    return (
        <nav className="navbar-container">
          <div className="logo"><img src='./word-white-logo.png'/></div>
          <div className="links">
            <a href="#home" className="link-item">Home</a>
            <a href="#features" className="link-item">Features</a>
            <a href="#pricing" className="link-item">Pricing</a>
            <a href="#faqs" className="link-item">Faqs</a>
          </div>
          <Link to={user ?"/dashboard" :'/login'}>
          <button className="get-started-button">{user? "Dashboard":"Sign In"}</button>
          </Link>
        </nav>
      );
}

export default Navbar