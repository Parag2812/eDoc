// components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/login');
    };


    const userName = localStorage.getItem('name');


    return (
        <div>
            <h1>Hi, {userName}</h1>

            <button onClick={handleLogout}>Logout</button>



            {/* Use the user's name from local storage */}
            {/* Render different content based on the role
      {user.role === 'admin' && <p>Welcome Admin</p>}
      {user.role === 'doctor' && <p>Welcome Doctor</p>}
      {user.role === 'user' && <p>Welcome User</p>} */}
        </div>
    );
};

export default Dashboard;
