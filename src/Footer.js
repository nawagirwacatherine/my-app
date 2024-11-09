
import React from 'react';
import './style.css';
import Logo from './images/little.png';
import Call from './images/call.webp';
import Email from './images/email.jpg';

function Footer() {
    return (
      <footer className="footer-style">
        <div className="flex-container">
          <div className="icon-container">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div className="icon-container">
            <img src={Call} alt="Call" className="icon" />
            <span>+256 751172447</span>
          </div>
          <div className="icon-container">
            <img src={Email} alt="Email" className="icon" />
            <span>little lemonkla@gmail.com</span>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright Little Lemon</p>
        </div>
      </footer>
    );
}

export default Footer;