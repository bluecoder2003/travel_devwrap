import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles


// Import your images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Singapore = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop className="carousel">
        <div>
          <img src={image1} alt="Singapore 1" />
        </div>
        <div>
          <img src={image2} alt="Singapore 2" />
        </div>
        <div>
          <img src={image3} alt="Singapore 3" />
        </div>
      </Carousel>
      <button className="book-plan">Book Plan</button>
    </div>
  );
};

export default Singapore;