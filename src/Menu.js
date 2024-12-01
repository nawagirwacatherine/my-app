
import './App.js';
import './style.css';
import imagesVideo2 from './images/video2.mp4';
import imagesHighlight from './images/highlight.jpeg';
import imagesDissert from './images/dissert.jpg';
import imagesDissert1 from './images/dissert1.jpg';
import Footer from './Footer';

function Menu() {

    return (
        <>
        <div>
         <video controls>
  <source src={imagesVideo2} type="video/mp4" />
</video>

            <h1>
                OUR DAILY MENU
            </h1>
            <p>At our restaurant our customers are our priority please expect the 
                best of the best service from us
            </p>
            </div>
            

<div className="menu">
  <h1>Our daily Menu, Only your favorite</h1>
  <div className="menu-section">
    <section className="menu-item">
      <img src={imagesHighlight} alt="Testimonial 1" className="image" />
      <article>
      <p>
      <ol className="ordered-menu">
                <li>Matooke</li>
                <li>Irish</li>
                <li>Rice</li>
                <li>Posho</li>
                <li>Cassava</li>
            </ol>
      </p>
      </article>
    </section>

    <section className="menu-item">
      <img src={imagesDissert} alt="Testimonial 2" className="image" />
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

    <section className="menu-item">
      <img src={imagesDissert1} alt="Testimonial 3" className="image" />
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