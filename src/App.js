
import React from 'react';
import './App.css';
import Home from './Home';
import Menu from './Menu';
import BookingPage from './BookingPage';
import Login from './Login';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/BookingPage" className="nav-item">BookingPage</Link>
        <Link to="/login" className="nav-item">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;



