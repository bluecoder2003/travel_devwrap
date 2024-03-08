import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import Destination from "./components/Destination/Destination";
import CarouSel from "./components/Testimonials/CarouselItem";
import Signin from "../src/components/SignIn/SignIn";
import "../src/App.css"

// export default function App() {
//   const [showChat, setShowChat] = useState(false);

//   const toggleChat = () => {
//     setShowChat(!showChat);
//   }
  function MainPage() {
    return (
      <>
        <Navbar />
        <Home id="home" />
        <About id="about" />
        <Booking id="booking" />
        <Destination id="testimonials" />
        <Contact id="contact" />
        <Footer />
      </>
    );
  }
  export default function App() {
    return (
      <Router>
        <div>
          
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
          
        </div>
      </Router>
    );
  }
