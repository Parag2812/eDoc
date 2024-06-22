import React, {useState} from 'react';
import axios from 'axios';
import './Register.css';
import '../Components/Login.css'

function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();

    try{
      const res = await axios.post('http://localhost:5000/api/users/register', {email, password});
      setSuccess('Registration Successful!');
      setError('');
    }catch(err){
      setError('User already exists');
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
      
          <label>Email:</label>
          <input type="text" placeholder="Email" required />
          <label>Password:</label>
          <input type="password" placeholder="Password" required />
          <label>Address:</label>
          <input type="text" placeholder="Address" required />
          <label>Age:</label>
          <input type="number" placeholder="Age" required />

          <div>
            
          <button type="submit">Submit</button>
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
