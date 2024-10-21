
import React from 'react';
import image1Image from "./images/image1.jpg";
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
    backgroundColor: '#333',  // Dark background
    color: '#fff',  // White text color
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative',  // Keeps the footer after the content
    width: '100%',
    bottom: '0',
    borderRadius: '10px',
  };

  return (
    <>
    <div style={backgroundStyle}>
      <h1>Welcome to the Home Page</h1>
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
        <p>© 2024 little lemon. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;


