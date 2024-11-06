import './style.css';
import React from 'react';

import footer from './images/little.png';
import imagesImage4 from './images/image4.jpg';
import imagesImage2 from './images/image2.jpg';
import imagesImage3 from './images/image3.jpg';
import imagesImage1 from './images/image1.jpg';
import imagesHighlight from './images/highlight.jpeg';
import imagesHighlight1 from './images/highlight1.png';
import imagesHighlight2 from './images/highlight2.jpg';
function Home() {
  const footerStyle = {
    backgroundColor: '#3c4313',  
    color: '#fff', 
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative', 
    width: '100%',
    bottom: '0',
    borderRadius: '10px',
  };
  
  return (
    <>

<div>
      <h1>Welcome to Little Lemon!</h1>
      <p>
Nestled in the heart of Kampala, Little Lemon is your go-to destination for fresh, vibrant, and flavorful dishes inspired by Mediterranean/Italian/Global, etc. cuisine. We’re passionate about using high-quality ingredients to create meals that are as beautiful as they are delicious, perfect for family gatherings, date nights, and friendly get-togethers. Come savor our warm, inviting atmosphere, where every meal feels like a celebration of great food, good company, and unforgettable flavors.

</p>
    </div>
    <div className="background-style">
    </div>
     <div>
      <h1>Discover more below!</h1>
      <p>Highlights<br/>Testimonial<br/>Our photos
      <br/>briefly about us</p>
    </div>
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

<div className="About">
  <h1>Socials</h1>
  <p>
    {/* About content here */}
  </p>
</div>

    <footer style={footerStyle}>
    <img src={footer} alt="footer" className="footer" />

    <div className="flex-container">
            <div>

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



