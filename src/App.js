import React from 'react';
import './App.css';
import Orderonline from './Orderonline.js';
import Menu from './Menu';
import Login from './Login';
import Home from './Home';
import {Routes, Route, Link} from 'react-router-dom';





function App() {
  return(

    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Menu" className="nav-item">Menu</Link>
        <Link to="/Orderonline" className="nav-item">Orderonline</Link>
        <Link to="/Login" className="nav-item">Login</Link>

      </nav>
      <Routes>
    <Route path="/" element={<Home />}/>
    <Route path= "/Menu" element={<Menu />}/>
    <Route path= "/Orderonline" element={<Orderonline />}/>
    <Route path= "/Login" element={<Login />}/>
    </Routes>
    </div>


  );
}
export default App;
