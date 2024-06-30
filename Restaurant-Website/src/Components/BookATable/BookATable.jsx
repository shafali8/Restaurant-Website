import React from 'react'
import "./BookATable.css";
import SubHeading from '../SubHeading/SubHeading';

const BookATable = () => {
  return (
   <div className="app__bg" id='book'>
     
    <div className="form__container">
    <SubHeading title={"Book a Table"}/>
    <h1  className="headtext__cormorant">Table Booking</h1>
     <form>
      <div className='form-content'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder='Your Name...'/>
      </div>
      <div className='form-content'>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder='Your Email...'/>
      </div>
      <div className='form-content'>
        <label htmlFor="phone">Phone Number</label>
        <input type="text" name="number" id="phone" placeholder='Your Phone number'/>
      </div>
      <div className='form-content'>
        <label htmlFor="table">No. of Table</label>
        <input type="number" name="number" id="table" min={0} max={9}/>
        <label htmlFor="date">Date</label>
        <input type="date" name="number" id="date"/>
        <label htmlFor="time">Time</label>
        <input type="time" name="time" id="time"/>
      </div>
      <div className='flex__center'>
        <button type="submit" className='custom__button booking_btn'>Book A Table</button>
      </div>
     </form>
    </div>
   </div>
  )
}

export default BookATable
