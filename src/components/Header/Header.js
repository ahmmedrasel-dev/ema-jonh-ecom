import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <nav className='header-container'>
      <div className='container'>
        <div className='navbar'>
          <Link to='/'>
            <img src={logo} alt=""></img>
          </Link>
          <div className='nav-item'>
            <Link to='/shop'>Shop</Link>
            <Link to='/orders'>Order</Link>
            <Link to='/inventory'>Inventory</Link>
            <Link to='/about'>About </Link>
            {
              user ?
                <button onClick={handleSignOut}>Sign out</button>
                :
                <Link to='/login'>Login</Link>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;