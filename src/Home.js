
import React from 'react';
import image1Image from "./images/image1.jpg";
import littleImage from  './images/little.png'
function Home() {
  const backgroundStyle = {
    backgroundImage:`url(${image1Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const footerStyle = {
    backgroundColor: 'grey',  
    color: '#fff', 
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative', 
    width: '100%',
    bottom: '0',
    borderRadius: '10px',
  };
  const logoStyle = {
    height: '50px',
    marginRight: '10px',
  }

  return (
    <>
    <div style={backgroundStyle}>
      <h1>Welcome to Little lemon Restaurant</h1>
    </div>
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>

    <footer style={footerStyle}>
      <img src={littleImage} alt="Logo" style={logoStyle}/>
        <p>© 2024 little lemon. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;


