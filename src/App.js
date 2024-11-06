
import React from 'react';
import './App.css';
import Home from './Home';
import Menu from './Menu';
import AboutUs from './AboutUs';
import BookingPage from './BookingPage';
import Login from './Login';
import logo from './images/little.png';
import { Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
    <div className="App">
    <nav className="nav">

  <img src={logo} alt="Logo" className="logo" />
  <div className="nav-items-wrapper">
    <Link to="/" className="nav-item">Home</Link>
    <Link to="/menu" className="nav-item">Menu</Link>
    <Link to="/BookingPage" className="nav-item">BookingPage</Link>
    <Link to="/login" className="nav-item">Login</Link>
    <Link to="/About-us" className="nav-item">About us</Link>
  </div>
</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;



