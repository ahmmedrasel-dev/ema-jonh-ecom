import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation()
  const handleLoginEmail = event => {
    setEmail(event.target.value);
  }

  const handleLoginPassword = event => {
    setPassword(event.target.value);
  }
  const from = location?.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }



  const handleLoginSubmit = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
  }



  return (
    <div className='form-container'>
      <form onSubmit={handleLoginSubmit}>
        <h1 className='form-title'>Login Form</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Email' onBlur={handleLoginEmail} />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' placeholder='Password' onBlur={handleLoginPassword} />
        </div>

        <div className="input-group">
          <input className='form-btn' type="submit" value="Login" />
        </div>
        <p className='register-link'>New to Ema-John? <Link to='/register'>Create an Account</Link></p>

        <p style={{ 'color': 'red' }}>{error?.message}</p>

      </form>

    </div>
  );
};

export default Login;