
import './App.js';
import './style.css';
import imagesHighlight from './images/highlight.jpeg';
import imagesHighlight1 from './images/highlight1.png';
import imagesHighlight2 from './images/highlight2.jpg';
import Footer from './Footer';

function Menu() {

    return (
        <>
        <div>

            <h1 className='heading'>
                OUR DAILY MENU
            </h1>
            <p className='heading'>At our restaurant our customers are our priority please expect the 
                best of the best service from us
            </p>
            </div>
            

<div className="Testimonials">
  <h1>Our daily Menu, Only your favorite</h1>
  <div className="testimonial-section">
    <section className="testimonial-item">
      <img src={imagesHighlight} alt="Testimonial 1" className="image" />
      <article>
      <p>
      <ul className="unordered-menu">
                <li>Matooke</li>
                <li>Irish</li>
                <li>Rice</li>
                <li>Posho</li>
                <li>Cassava</li>
            </ul>
      </p>
      </article>
    </section>

    <section className="testimonial-item">
      <img src={imagesHighlight1} alt="Testimonial 2" className="image" />
      <article>
      <p>
      <ol className="ordered-menu">
                <li>Burger</li>
                <li>Grilled Chicken</li>
                <li>Pasted Fish</li>
                <li>nyama choma</li>
                <li>Goats meat</li>
            </ol>
      
      </p>
      </article>
    </section>

    <section className="testimonial-item">
      <img src={imagesHighlight2} alt="Testimonial 3" className="image" />
      <article>
      <p>
      <ol className="ordered-menu">
                <li>Burger</li>
                <li>Grilled Chicken</li>
                <li>Pasted Fish</li>
                <li>nyama choma</li>
                <li>Goats meat</li>
            </ol>
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

export default Menu;