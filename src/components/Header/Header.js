import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <nav className='header-container'>
      <div className='container'>
        <div className='navbar'>
          <img src={logo} alt=""></img>
          <div className='nav-item'>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;