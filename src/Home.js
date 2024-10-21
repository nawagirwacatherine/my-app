
import React from 'react';
import image1Image from "./images/image1.jpg";
function Home() {
  const backgroundStyle = {
    backgroundImage:`url(${image1Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    </>
  );
}

export default Home;

// import React from 'react';
// import littleImage from './images/little.png';  // Import the image

// function Home() {
//   const backgroundStyle = {
//     backgroundImage: `url(${littleImage})`,  // Use the imported image
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   return (
//     <>
//       <div style={backgroundStyle}>
//         <h1>Welcome to the Home Page</h1>
//       </div>
//       <div>
//         <h1>Welcome to the Home Page</h1>
//       </div>
//       <div>
//         <h1>Welcome to the Home Page</h1>
//       </div>
//       <div>
//         <h1>Welcome to the Home Page</h1>
//       </div>
//     </>
//   );
// }

// export default Home;


