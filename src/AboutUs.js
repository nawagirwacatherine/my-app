import "./style.css"
import imagesHighlight from './images/highlight.jpeg';
import imagesHighlight1 from './images/highlight1.png';
import imagesHighlight2 from './images/highlight2.jpg';
import Footer from './Footer';

function AboutPage () {

  return(

  <>

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
      )

}

export default AboutPage;