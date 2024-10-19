import { useState } from "react";
import BookingPage from "./BookingPage";

function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // Function to update available times based on date selection
  const updateAvailableTimes = (selectedDate) => {
    // Here you could modify available times based on the selected date.
    // For now, we'll just keep the same times.
    console.log("Selected Date: ", selectedDate);
    // Example: you could add logic to filter or change times based on the date.
    setAvailableTimes(["18:00", "19:00", "21:00"]); // Example hardcoded change
  };

  return (
    <div>
      <h1>Reservation System</h1>
      <BookingPage
        availableTimes={availableTimes}
        updateAvailableTimes={updateAvailableTimes} // Pass down the function to update times
      />
    </div>
  );
}


export default Main;