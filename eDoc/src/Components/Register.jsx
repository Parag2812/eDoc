import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password,
        address,
        age
      });
      setSuccess('Registration Successful!');
      setError('');

      // Store the email in local storage
      localStorage.setItem('registeredEmail', email);


      // Navigate to /login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);



    } catch (err) {
      setError(err.response?.data?.message || 'User registration failed');
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Let's Get Started!</h2>
        <p>Add Your Personal Details to Continue</p>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleRegister}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email:</label>
          <input
            type="text"
            placeholder="Email"
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
          <label>Address:</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label>Age:</label>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <p className="signup-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
