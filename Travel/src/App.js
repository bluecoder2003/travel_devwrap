import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import Destination from "./components/Destination/Destination";
import CarouSel from "./components/Testimonials/CarouselItem";
import Login from "./components/LogIn/LogIn";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Booking id="booking" />
      <Destination id="testimonials" />
      <CarouSel />
      <Contact id="contact" />
      <Login id="login" />  
      <Footer />
    </div>
  );
}