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
    backgroundColor: 'grey',  
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
    <div>
      <h1>Highlights</h1>
      <div className="footer-images">
      <img src={imagesImage4} alt="Highlight 1" className="image" />
      <img src={imagesImage2} alt="Highlight 2" className="image" />
      <img src={imagesImage3} alt="Highlight 3" className="image" />
      <img src={imagesImage1} alt="Highlight 4" className="image" />
    </div>
    </div>
    {/* <div className="Testimonials">
    <h1>Testimonials</h1>
    <p>"Little Lemon is a gem in Kampala! The food is bursting with authentic Mediterranean flavors, and the ambiance is so cozy and welcoming. It feels like a little escape to the Mediterranean!"
— Sarah M.

"Perfect place for a family meal or a romantic dinner. The dishes are beautifully presented, and the staff treats you like family. My favorite spot in the city!"
— James K.

"The freshness of the ingredients really sets Little Lemon apart. Every bite is delicious, from the appetizers to the desserts. Highly recommend the grilled lamb and handmade pasta!"
— Linda T.

"Little Lemon has mastered the art of Mediterranean cuisine! The flavors are rich, the portions are generous, and the setting is lovely. A must-visit for food lovers!"
— Alex O.

"This is the kind of place you’ll want to visit again and again. Little Lemon has everything I look for in a restaurant: amazing food, friendly staff, and a great vibe. Absolutely delightful!"
— David R.</p>

    <div className="footer-images">
      <img src={imagesHighlight} alt="Testimonial 1" className="image" />
      <img src={imagesHighlight1} alt="Testimonial 2" className="image" />
      <img src={imagesHighlight2} alt="Testimonial 3" className="image" />
    </div>
    </div>

    <div className="About">
      <h1>About </h1>
      <p><br/>Name:Little lemon Restaurant kampala uganda<br/>
      <br/>Description:Welcome to Little Lemon – A Taste of the Mediterranean in the Heart of Kampala

At Little Lemon, we bring the vibrant flavors of the Mediterranean to your plate, combining fresh ingredients with a passion for culinary creativity. Located in the bustling heart of Kampala, our restaurant offers a cozy and inviting space where you can enjoy delicious dishes inspired by Italian, Greek, and Middle Eastern cuisines, alongside global favorites.

Whether you're joining us for a quick lunch, a relaxed family dinner, or a special date night, every meal at Little Lemon is crafted to be memorable. We believe that food is not only nourishment but an experience to be savored. Each dish, from our handmade pastas and fresh salads to our flavorful grilled meats and artisanal desserts, is prepared with care, using locally sourced, high-quality ingredients.

Our mission is to offer more than just a meal. We want you to enjoy the ambiance, feel at home, and indulge in flavors that celebrate the joy of food and community. Join us for an unforgettable dining experience where every dish tells a story and every visit feels like a celebration.

Come taste the Mediterranean spirit at Little Lemon – where freshness, flavor, and friendship come together.<br/><br/>Photos<br/><br/>Name<br/></p>
    </div>  */}

<div className="Testimonials">
  <h1>Testimonials</h1>
  <div className="testimonial-section">
    <section className="testimonial-item">
      <img src={imagesHighlight} alt="Testimonial 1" className="image" />
      <p>
        "Little Lemon is a gem in Kampala! The food is bursting with authentic Mediterranean flavors, and the ambiance is so cozy and welcoming. It feels like a little escape to the Mediterranean!"
        <br />— Sarah M.
      </p>
    </section>

    <section className="testimonial-item">
      <img src={imagesHighlight1} alt="Testimonial 2" className="image" />
      <p>
        "Perfect place for a family meal or a romantic dinner. The dishes are beautifully presented, and the staff treats you like family. My favorite spot in the city!"
        <br />— James K.
      </p>
    </section>

    <section className="testimonial-item">
      <img src={imagesHighlight2} alt="Testimonial 3" className="image" />
      <p>
        "The freshness of the ingredients really sets Little Lemon apart. Every bite is delicious, from the appetizers to the desserts. Highly recommend the grilled lamb and handmade pasta!"
        <br />— Linda T.
      </p>
    </section>

    {/* Add more testimonial items as needed */}
  </div>
</div>

<div className="About">
  <h1>About</h1>
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



