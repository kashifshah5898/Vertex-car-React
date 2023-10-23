import React, { useState } from "react";
import "./Invoiceform.css";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Invoices() {
    const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const mydata = location.state
  console.log("mydata",mydata)
  const navigate = useNavigate();
  
  
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    setProcessing(true);
    setMessage("Processing Payment...");
  
    setTimeout(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Your Payment Is Recieved!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      setProcessing(false);
  
      // Navigate to the next page with data from state
      navigate('/invoice-details', {
        state: location.state, // Pass the data received from Cardetails
      });
  
    }, 3000);
  };

  return (
    <>
      <div className="credit-card-form">
        <h2>PAYMENT PORTAL</h2>
        <img
          className="Image1"
          src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
          alt="Card Mockup"
          border="0"
        />

        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Card number" />
          </div>
          <div className="form-group">
            <label htmlFor="card-holder">Card Holder</label>
            <input
              type="text"
              id="card-holder"
              placeholder="Card holder's name"
            />
          </div>
          <div className="form-row">
            <div className="form-group form-column">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" placeholder="MM/YY" />
            </div>
            <div className="form-group form-column">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="CVV" />
            </div>
          </div>
          <button type="submit" className="click-button">
          {processing ? message : "Click to Start Payment"}          </button>
        </form>
      </div>
    </>
  );
}
export default Invoices