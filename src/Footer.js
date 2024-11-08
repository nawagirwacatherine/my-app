import React from 'react';
import logo from './images/little.png';
import './style.css';

function Footer() {
    return (
      <footer className="footer-style">
        <div className="flex-container">
          <div>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div>
            <p>Copyright Little Lemon</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;