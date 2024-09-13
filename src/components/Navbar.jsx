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
            {/* <a href="#pricing" className="link-item">Pricing</a> */}
            <a href="#faqs" className="link-item">Faqs</a>
          </div>
          <Link className="get-started-button" to={user ?"/dashboard" :'/login'}>
          {user? "Dashboard":"Sign In"}
          </Link>
        </nav>
      );
}

export default Navbar