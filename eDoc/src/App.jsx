import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';


function App() {
  return (
        <Router>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/dashboard" element={<Dashboard/>} />

              {/* <Route path="/" element={<Home />} /> */}
              {/* Add more routes here as needed */}
            </Routes>
          </div>
        </Router>
  );
}

export default App;