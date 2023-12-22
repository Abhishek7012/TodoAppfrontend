import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css'
function Navbar() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <div className="nav false">
      <div className='nav__signup'>
        {auth ? (
          <Link onClick={logout} to="/signup">Logout</Link>
        ) : (
          <>
            {location.pathname === '/signup' && <Link to="/login">Login</Link>}
            {location.pathname !== '/signup' && location.pathname !== '/login' && location.pathname !== '/' && <Link to="/signup">Sign Up</Link>}          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
