import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import Destination from "./components/Destination/Destination";
import CarouSel from "./components/Testimonials/CarouselItem";

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About/>
      <Booking/>
      <Destination/>
      <CarouSel/>
      <Contact/>
      <Footer/>
    </div>
  );
}
