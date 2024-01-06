import React, { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendar, FaUser, FaChild, FaBaby } from 'react-icons/fa';
import './Book.css'
import { useNavigate } from "react-router-dom";
function Book() {
  const [formData, setFormData] = useState({
    tripType: "oneWay",
    departureCity: "",
    arrivalCity: "",
    departureDate: "",
    returnDate: "",
    adults: 1,
    children: 0,
    infants: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
  };
  const navigate=useNavigate();
  const handleBookflightsClick=()=>{
    navigate('/login')
  }
  return (
    <>
    <center>
      <h1>Flight Booking</h1>
      <form onSubmit={handleSubmit} >
        <label>
          Trip Type:
          <select name="tripType" value={formData.tripType} onChange={handleChange}>
            <option value="oneWay">One Way</option>
            <option value="return">Return</option>
          </select>
        </label>
        <br />

        <label>
          Departure City: <FaPlaneDeparture />
          <input
            type="text"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Arrival City: <FaPlaneArrival />
          <input
            type="text"
            name="arrivalCity"
            value={formData.arrivalCity}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Departure Date: <FaCalendar />
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        {formData.tripType === "return" && (
          <label>
            Return Date: <FaCalendar />
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
          </label>
        )}
        <br />

        <label>
          Adults: <FaUser />
          <input
            type="number"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            min="1"
            required
          />
        </label>
        <br />

        <label>
          Children: <FaChild />
          <input
            type="number"
            name="children"
            value={formData.children}
            onChange={handleChange}
            min="0"
          />
        </label>
        <br />

        <label>
          Infants: <FaBaby />
          <input
            type="number"
            name="infants"
            value={formData.infants}
            onChange={handleChange}
            min="0"
          />
        </label>
        <br />
        <button type="submit" onClick={handleBookflightsClick}>Book Flights</button>
      </form>
      </center>
    </>
  );
}

export default Book;
