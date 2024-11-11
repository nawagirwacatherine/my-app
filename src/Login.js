// import {useState} from "react";
// import './App.js';
// import image3Images from './images/image3.jpg';
// import Footer from './Footer';
// import imagesHighlight from './images/highlight.jpeg';
// import imagesHighlight1 from './images/highlight1.png';
// import imagesHighlight2 from './images/highlight2.jpg';


// function Login() {
//   const handleSubmit = (e) =>{
//     e.preventDefault();
   
//     console.log("submitted!");
//     setName("");
//     setScore("10");
//     setComment("");
 
//   }

//     const backgroundStyle={

//     backgroundImage:`linear-gradient(rgba(2,5,10,0.4),#009688),url(${image3Images})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh',
//     borderRadius: '10px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
    
//     }
//         return(
//             <>
//             <div style={backgroundStyle}>

// {/* <div className="Field"> */}
// <form onSubmit={handleSubmit}>
//   <div className="Field">
//       <label htmlFor="password">password</label>
//       <input
//       id="password"
//       type="password" />
//      </div>

//                 <div className="Field">
//       <label htmlFor="email">email</label>
//       <input
//       id="email"
//       type="email" />
//      </div>
//      <div>
//      <button type="submit">Submit</button>
//             </div>

//             <button disabled={!name} type="submit">Submit</button>
//             </form>

//   <div className="Testimonials">
//   <h1>Testimonials</h1>
//   <div className="testimonial-section">
//     <section className="testimonial-item">
//       <img src={imagesHighlight} alt="Testimonial 1" className="image" />
//       <article>
//       <p>
//         "Little Lemon is a gem in Kampala! The food is bursting with authentic Mediterranean flavors, and the ambiance is so cozy and welcoming. It feels like a little escape to the Mediterranean!"
//         <br />— Sarah M.
//       </p>
//       </article>
//     </section>

//     <section className="testimonial-item">
//       <img src={imagesHighlight1} alt="Testimonial 2" className="image" />
//       <article>
//       <p>
//         "Perfect place for a family meal or a romantic dinner. The dishes are beautifully presented, and the staff treats you like family. My favorite spot in the city!"
//         <br />— James K.
//       </p>
//       </article>
//     </section>

//     <section className="testimonial-item">
//       <img src={imagesHighlight2} alt="Testimonial 3" className="image" />
//       <article>
//       <p>
//         "The freshness of the ingredients really sets Little Lemon apart. Every bite is delicious, from the appetizers to the desserts. Highly recommend the grilled lamb and handmade pasta!"
//         <br />— Linda T.
//       </p>
//       </article>
//     </section>

//   </div>
// </div>
// <p>Checkout our Socials</p>
//   <Footer />

//   </>
//         )
    

// }


// export default Login;



import './App.js';
import Footer from './Footer';
import imagesHighlight from './images/highlight.jpeg';
import imagesHighlight1 from './images/highlight1.png';
import imagesHighlight2 from './images/highlight2.jpg';

function Login() {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");

  };

  // const backgroundStyle = {
  //   backgroundImage: `linear-gradient(rgba(2,5,10,0.4),#009688),url(${image3Images})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '100vh',
  //   borderRadius: '10px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // };

  return (
    <>
      {/* <div style={backgroundStyle}> */}
        <form onSubmit={handleSubmit}>
          <div className="Field">
            <label htmlFor="password">password</label>
            <input id="password" type="password" />
          </div>

          <div className="Field">
            <label htmlFor="email">email</label>
            <input id="email" type="email" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>

        </form>

        <div className="Testimonials">
          <h1>Testimonials</h1>
          <div className="testimonial-section">
            <section className="testimonial-item">
              <img src={imagesHighlight} alt="Testimonial 1" className="image" />
              <article>
                <p>
                  "Little Lemon is a gem in Kampala! The food is bursting with authentic Mediterranean flavors, and the ambiance is so cozy and welcoming. It feels like a little escape to the Mediterranean!"
                  <br />— Sarah M.
                </p>
              </article>
            </section>

            <section className="testimonial-item">
              <img src={imagesHighlight1} alt="Testimonial 2" className="image" />
              <article>
                <p>
                  "Perfect place for a family meal or a romantic dinner. The dishes are beautifully presented, and the staff treats you like family. My favorite spot in the city!"
                  <br />— James K.
                </p>
              </article>
            </section>

            <section className="testimonial-item">
              <img src={imagesHighlight2} alt="Testimonial 3" className="image" />
              <article>
                <p>
                  "The freshness of the ingredients really sets Little Lemon apart. Every bite is delicious, from the appetizers to the desserts. Highly recommend the grilled lamb and handmade pasta!"
                  <br />— Linda T.
                </p>
              </article>
            </section>
          </div>
        </div>

        <p>Checkout our Socials</p>
        <Footer />
     
    </>
  );
}

export default Login;