import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value);
  }

  if (user) {
    navigate('/inventory')
  }
  const handleSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Your Password does not match.')
      return;
    }

    if (password.length < 8) {
      setError('Your Password At list 8 Charecter.')
      return;
    }

    createUserWithEmailAndPassword(email, password)
  }



  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h1 className='form-title'>Register Form</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Email' onBlur={handleEmailBlur} />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' placeholder='Password' onBlur={handlePasswordBlur} />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id='confirmPassword' placeholder='Confirm Password' onBlur={handleConfirmPassword} />

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

export default Register;