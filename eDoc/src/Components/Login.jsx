import React, { useEffect, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {

    // Retrieve the email from local storage
    const registeredEmail = localStorage.getItem('registeredEmail');
    if (registeredEmail) {
      setEmail(registeredEmail);
      // Clear the email from local storage
      localStorage.removeItem('registeredEmail')
    }

  })



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      console.log('LOGIN SUCCESSFUL:', res.data); // Verify response data

      const { token, name } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('name', name); // Store the user's name in local storage

      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      setError('INVALID email or password');
    }

  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>Login with your details to continue</p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
