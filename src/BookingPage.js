
import {useState} from "react";
import "./style.css"
import Footer from './Footer';
import imagesHighlight from './images/highlight.jpeg';
import imagesHighlight1 from './images/highlight1.png';
import imagesHighlight2 from './images/highlight2.jpg';
// import imagesVideo3 from './images/video3.mp4';


function BookingPage() {
  const[name, setName]= useState("");
  const[score, setScore]= useState("10");
   const[comment, setComment]= useState(";")
   const [date, setDate] = useState("");
   const [time, setTime] = useState("");
   const [guests, setGuests] = useState(1);
   const [occasion, setOccasion] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10){
      alert("Please provide a comment explaining why the exprience was poor");
      return;
    }
    console.log("Form submitted!");
    setName("");
    setScore("10");
    setComment("");
 
  }
  const handleReservationSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please select a date");
      return;
    }
    if (guests < 10 || guests > 500) {
      alert("Please enter the number of guests between 10 and 500");
      return;
    }
    console.log("Reservation submitted!");
  };


  return (
    <>
    <div>
    {/* <video controls>
  <source src={imagesVideo3} type="video/mp4" />
</video> */}
      <h1>FOR ALL YOUR RESERVATIONS CHECK DOWN HERE!</h1>
      <p>We have a form down please place your reservation!  <b/>Feel free to feedback about anything we are here to serve you<b/></p>
    </div>
    <form onSubmit={handleReservationSubmit}>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" 
    id="res-date"
    
    value={date}
    onChange={(e) => setDate(e.target.value)}
    />
    <label htmlFor="res-time">Choose time</label>

    <select  id="res-time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
    >
      <option value="17:00">17:00</option>
      <option value="18:00">18:00</option>
      <option value="19:00" >19:00</option>
      <option value="20:00">20:00</option>
      <option value="21:00">21:00</option>
      <option value="22:00">22:00</option>
    </select>

    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="10" max="500"
     id="guest" 
     value={guests}
     onChange={(e) => setGuests(e.target.value)}
     />
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion"
      value={occasion}
      onChange={(e) => setOccasion(e.target.value)}
    >
      <option >Birthday</option>
      <option >Anniversary</option>
    </select>
    <input type="Submit" value="Make Your reservation"/>
    </form>

<div>
  <p>We welcome your feed back!</p>
</div>
  
    
    
      <form onSubmit={handleSubmit}>
      <h1 className="heading">Customer feedback</h1>
        <fieldset>
     <div className="Field">
      <label htmlFor="name">Name</label>
      <input
      id="name"
      type="text"
       placeholder="Name" 
       name="name" 
       value={name} onChange={e => setName(e.target.value)} />
     </div>

     <div className="field">
      <label htmlFor="range">Score:{score}</label>
      <input type="range" 
      min="0"
       max="10" 
       value={score}
        onChange={e => setScore(e.target.value)} />
     </div>

     <div className="Field">
 <label>
comment:
<textarea value={comment} onChange = {e => setComment(e.target.value)}/>
 </label>
     </div>

     <button disabled={!name} type="submit">Submit</button>
        </fieldset>

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
  )
}

export default BookingPage;