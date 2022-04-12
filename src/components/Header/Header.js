import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
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
            <Link to='/about'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;