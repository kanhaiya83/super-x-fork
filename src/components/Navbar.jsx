import {Link}from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const Navbar = () => {
  const { user } = useAuthContext();
    return (
        <nav className="navbar-container">
          <div>

          <div className="logo" style={{marginBottom:"-16px"}}><img src='./word-white-logo.png'/></div>
          <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}><p>Powered by </p> <img src='./cluster-protocol.png' style={{width:"4.5rem"}}/></div>
          </div>
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