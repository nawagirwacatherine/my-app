import './style.css';
import React from 'react';
import Footer from './Footer';
import imagesImage4 from './images/image4.jpg';
import imagesImage2 from './images/image2.jpg';
import imagesImage3 from './images/image3.jpg';
import imagesImage1 from './images/image1.jpg';
import imagesHighlight from './images/highlight.jpeg';
import imagesHighlight1 from './images/highlight1.png';
import imagesHighlight2 from './images/highlight2.jpg';

function Home() {

  const containerStyle = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: '20px',
    flexDirection: 'row-reverse',
  };

  const imageStyle = {
    width: '40%', 
    borderRadius: '10px',
    opacity: '0.8',  // Adjust the opacity if needed
    objectFit: 'cover',
    };

  const textStyle = {
    width: '55%',
    marginLeft: '20px',
    textAlign: 'left',
  };
  
  return (
    <>
<div style={containerStyle}>
        <img src={imagesImage2} alt="Restaurant" style={imageStyle} />
        <div style={textStyle}>
          <h1>Welcome to Little Lemon!</h1>
          <p>
            Nestled in the heart of Kampala, Little Lemon is your go-to destination for fresh, vibrant, and flavorful dishes inspired by Mediterranean/Italian/Global cuisine. We’re passionate about using high-quality ingredients to create meals that are as beautiful as they are delicious, perfect for family gatherings, date nights, and friendly get-togethers. Come savor our warm, inviting atmosphere, where every meal feels like a celebration of great food, good company, and unforgettable flavors.
          </p>

          {/* <button>
            <input type='text'>button</input>
          </button> */}
</div>
    </div>
    <div className="background-style">
    </div>
     {/* <div>
      <h1>Discover more below!</h1>
      <p>Highlights<br/>Testimonial<br/>Our photos
      <br/>briefly about us</p>
    </div> */}
    <div className='highlights'>
      <h1>Highlights</h1>
      <div className="footer-images">
        <div className='highlights-section'>
        <section className="highlights-item">
      <img src={imagesImage4} alt="Highlight 1" className="image" />
      <article>
      <p>We offer you a warm welcome!</p>
      </article>
      </section>

      <section className="highlights-item">
      <img src={imagesImage2} alt="Highlight 2" className="image" />
      <article>
      <p>We care about your visitors day out!!</p>
      </article>
      </section>

      <section className="highlights-item">
      <img src={imagesImage3} alt="Highlight 3" className="image" />
      <article>
        <p>
      Meeting arrangements
      </p>
      </article>
      </section>


      <section className="highlights-item">
      <img src={imagesImage1} alt="Highlight 4" className="image" />
      <p>
        Our clients celebrating birthdays
      </p>
      </section>

      </div>
    </div>
    </div>


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

<div style={containerStyle} className="About">
  <h1>Little Lemon</h1>
  <h2>Kampala uganda</h2>
  <p>
    Was founded in 2010 by two Twins who believed in their art of cooking. <br/>It has increased its menu over the time.<br/>And serves foreigners different dishes of their choice hence satisfying our clients
    
  </p>
  <img src={imagesImage3} alt="Restaurant" style={imageStyle} />
</div>
<Footer />
    </>
  );
}

export default Home;



