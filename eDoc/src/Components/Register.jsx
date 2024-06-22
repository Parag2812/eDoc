import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Let's Get Started!</h2>
        <p>Add Your Personal Details to Continue</p>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Name" required />
          <label>Address:</label>
          <input type="text" placeholder="Address" required />
          <label>Date of Birth:</label>
          <input type="date" placeholder="DOB" required />
{/* 
          <label>Email:</label>
          <input type="text" placeholder="Email" required />

          <label>Phone Number:</label>
          <input type="number" placeholder="Phone Number" required />

          <label>Password:</label>
          <input type="password" placeholder="Password" required /> */}
          <div>
            
           <button type="reset">Reset</button>
           
          <button type="submit">Next</button>
          </div>
        </form>
        <p className="signup-link">
        Already have an account?  <a href="/login">Login </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
