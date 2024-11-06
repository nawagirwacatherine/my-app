
import {useState} from "react";
import "./style.css"
import footer from './images/little.png';
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


  
    <div className="App">
    
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
  )
}

export default BookingPage;