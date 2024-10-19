import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';

describe('BookingPage Component', () => {
  test('should show an alert if the reservation date is not selected', () => {
   
    render(<BookingPage />);


    const submitButton = screen.getByText(/Make Your Reservation/i);
    fireEvent.click(submitButton);

  
    expect(window.alert).toHaveBeenCalledWith("Please select a date");
  });

  test('should show an alert if the number of guests is out of range', () => {
   
    render(<BookingPage />);

    
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '5' } });

    const submitButton = screen.getByText(/Make Your Reservation/i);
    fireEvent.click(submitButton);

   
    expect(window.alert).toHaveBeenCalledWith(
      "Please enter the number of guests between 10 and 500"
    );
  });

  test('should disable feedback form submit button when name is empty', () => {
  
    render(<BookingPage />);

    const feedbackSubmitButton = screen.getByText(/Submit/i);

   
    expect(feedbackSubmitButton).toBeDisabled();
  });

  test()
    render(<BookingPage />);

   
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const scoreInput = screen.getByLabelText(/Score/i);
    fireEvent.change(scoreInput, { target: { value: '3' } });

    const commentInput = screen.getByLabelText(/Comment/i);
    fireEvent.change(commentInput, { target: { value: 'Bad' } });

    const feedbackSubmitButton = screen.getByText(/Submit/i);
    fireEvent.click(feedbackSubmitButton);

    
    expect(window.alert).toHaveBeenCalledWith(
      "Please provide a comment explaining why the experience was poor"
    );
  });
