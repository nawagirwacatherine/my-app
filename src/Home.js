import './style.css';
import React from 'react';
import littleImage from  './images/little.png'
function Home() {
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

<div>
      <h1>Welcome to the Home Page</h1>
    </div>
    <div className="background-style">
    </div>
     <div>
      <h1>Welcome to the Home Page</h1>
    </div>
    <div>
      <h1>Highlights</h1>
    </div>
    <div>
    <h1>Testimonials</h1>
    </div>

    <div>
      <h1>About </h1>
      <p><br/>Name<br/><br/>Description<br/><br/>Photos<br/><br/>Name<br/></p>
    </div> 

    <footer style={footerStyle}>

    <div className="flex-container">
            <div>
            <img src={littleImage} alt="Logo" style={logoStyle}/>
            </div>
            <div>
                <p>Copyright little Lemon</p>
            </div>
           
        </div>
      </footer>


    </>
  );
}

export default Home;



