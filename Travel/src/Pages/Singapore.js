import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import '../Pages/singapore.css';

// Import your images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/singapore_cityscape.jpg';

const Singapore = () => {
  return (
    <>
      <div className="singapore-page">
      <div className="pic section_margin">
        <h3>Singapore</h3>
      </div>
      <div className="text_box section_margin">
        <h4>View Description</h4>
        <p>Singapore, a dynamic city-state nestled in Southeast Asia, captivates with its blend of modernity and tradition. Renowned for its efficient infrastructure, multicultural society, and thriving economy, Singapore is a global hub for finance, technology, and commerce. From iconic landmarks like Marina Bay Sands to its lush green spaces and delectable street food, Singapore offers a kaleidoscope of experiences that enchant visitors and residents alike. With its unwavering commitment to excellence and innovation, Singapore continues to shine as a beacon of progress on the world stage.</p>
      </div>
      <div className="plans section_margin">
        <h4>View Plans</h4>
        <div className="plan">
        <div class="timeline-container">
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 1</time>
                    <p>Explore Marina Bay - Entry to Gardens by the Bay: $28 SGD/person, Marina Bay Sands SkyPark Observation Deck: $23 SGD/adult, ArtScience Museum: $21 SGD/adult.</p>
                    <p>Total: Approximately $72 SGD/person.</p>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item section_margin">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 2</time>
                    <p>Sentosa Island Adventure - Universal Studios Singapore ticket: $81 SGD/adult, S.E.A. Aquarium ticket: $41 SGD/adult, Adventure Cove Waterpark ticket: $38 SGD/adult, Wings of Time show: $18 SGD/adult.</p>
                    <p>Total: Approximately $178 SGD/person.</p>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 3</time>
                    <p>Cultural Immersion - Chinatown and Little India exploration: Free, Buddha Tooth Relic Temple: Free (donation encouraged), Sri Veeramakaliamman Temple: Free. Total: Minimal expenses for food and transportation, </p>
                    <p>Total: Approximately $20-30 SGD/person.</p>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 4</time>
                    <p>Nature and Wildlife - Singapore Zoo ticket: $41 SGD/adult, Jurong Bird Park ticket: $31 SGD/adult, Singapore Botanic Gardens: Free (orchid garden entry: $5 SGD/adult). </p>
                    <p>Total: Approximately $77 SGD/person.</p>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag">Tag</span>
                    <time>Day 5</time>
                    <p>Shopping and Food - Shopping expenses vary depending on personal preferences. Food at a hawker center: $5-10 SGD/person, meal at a cafe or restaurant: $20-30 SGD/person.</p>
                    <p>Total: Approximately $30-40 SGD/person for food, plus shopping expenses.</p>
                    <span class="circle"></span>
                </div>
            </div>
        </div>
        </div>
        <div className="button-container">
          <button className="book-plan section-margin">Book Plan</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Singapore;