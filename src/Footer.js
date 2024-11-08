import React from 'react';
import Login from './Login';
import Call from './images/call.webp';
import Email from './images/email.jpg';


function Footer() {
    return (
      <footer className="footer-style">
        <div className="flex-container">
          <div>
            <img src={Login} alt="Logo" className="logo" />
            <img src={Call} alt="Call" className="call" />
            <img src={Email} alt="Email" className="email" />
          </div>
          <div>
            <p>Copyright Little Lemon</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;