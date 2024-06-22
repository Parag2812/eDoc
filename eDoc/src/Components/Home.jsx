
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

import Login from './Login';

function Home() {

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate('/login');
}
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">eDoc. | SEAMLESS HEALTHCARE ACCESS</div>
          <div className="auth-links">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </nav>
        <div className="hero-section">
          <div className="overlay"></div>
          <div className="content">
            <h1>Avoid Hassles & Delays.</h1>
            <p>How is health today, Sounds like not good! Don't worry. Find your doctor online. Book as you wish with eDoc. We offer you a free doctor channeling service. Make your appointment now.</p>
            <button onClick={handleAppointmentClick} className="appointment-button">Make Appointment</button>
          </div>
        </div>
      </header>
      <footer>
        <p>PG web design and development &copy;2024. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default Home;
