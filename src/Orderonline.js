import {useState} from "react";
import "./style.css"
function Orderonline() {
  const[name, setName]= useState("");
  const[score, setScore]= useState("10");
   const[comment, setComment]= useState(";")

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


  return (
    <>
    <form>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date"/>
    <label htmlFor="res-time">Choose time</label>

    <select  id="res-time">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
    </select>

    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="10" max="500" id="guest" />
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion">
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
    </>
  )
}

export default Orderonline;