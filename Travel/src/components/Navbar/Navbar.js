// Navbar.js
import React from 'react';
import '../Navbar/navbar.css';

const Navbar = () => {
  return (
    <div className="nav__container">
      <div className="nav">
        <div className='icon-container'>
          <div className='con'><a href="#home">Home</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#about">About</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#booking">Booking</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#testimonials">Testimonials</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#contact">Contact</a></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
