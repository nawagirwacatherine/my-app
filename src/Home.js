import './style.css';
import React from 'react';
// import littleImage from  './images/little.png'

import footer from './images/little.png';
import imagesImage4 from './images/image4.jpg';
import imagesImage2 from './images/image2.jpg';
import imagesImage3 from './images/image3.jpg';
import imagesHighlight from './images/highlight.jpeg';
import imagesHighlight1 from './images/highlight1.png';
import imagesHighlight2 from './images/highlight2.jpg';
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
  // const logoStyle = {
  //   height: '50px',
  //   marginRight: '10px',
  // }

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
      <div className="Highlights">
      <img src={imagesImage4} alt="imagesImage4" className="footer" />
      <img src={imagesImage2} alt="footer" className="footer" />
      <img src={imagesImage3} alt="footer" className="footer" />
    </div>
    </div>
    <div className="Testimonials">
    <h1>Testimonials</h1>

    <div className="Highlights">
      <img src={imagesHighlight} alt="imagesHighlight" className="footer" />
      <img src={imagesHighlight1} alt="imagesHighlight1" className="footer" />
      <img src={imagesHighlight2} alt="imagesHighlight2" className="footer" />
    </div>
    </div>

    <div className="About">
      <h1>About </h1>
      <p><br/>Name<br/><br/>Description<br/><br/>Photos<br/><br/>Name<br/></p>
    </div> 

    <footer style={footerStyle}>
    <img src={footer} alt="footer" className="footer" />

    <div className="flex-container">
            <div>
            {/* <img src={littleImage} alt="Logo" style={logoStyle}/> */}
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



