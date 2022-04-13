import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setEror] = useState('');
  const [user] = useAuthState(auth);

  const handleNameBlur = event => {
    setName(event.target.value);
  }

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handleAddressBlur = event => {
    setAddress(event.target.value);
  }

  const handleConfirmPhone = event => {
    setPhone(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const shipping = { name, email, address, phone }
    console.log(shipping);

  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h1 className='form-title'>Shipping Address</h1>

        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id='name' placeholder='Full Name' onBlur={handleNameBlur} />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Email' value={user?.email} readOnly />
        </div>

        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input type="text" id='address' placeholder='Address' onBlur={handleAddressBlur} />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Confirm Password</label>
          <input type="number" id='phone' placeholder='Phone Number' onBlur={handleConfirmPhone} />

          <p style={{ 'color': 'red' }}>{error}</p>
        </div>

        <div className="input-group">
          <input className='form-btn' type="submit" value="Register" />
        </div>
        <p className='register-link'>Already have account? <Link to='/login'>Login</Link></p>
      </form>

    </div>
  );
};

export default Shipment;