import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>No more Long queues in Clinics</h4>
      <h1 className="gradient__text">EVA is Providing Assistance <br /> within University hours.</h1>
      <p>In the modern educational landscape, universities are not just places of learning; they are entire ecosystems, bustling with academic activities, student life, 
        and administrative responsibilities. Within this dynamic environment, Chatbot E.V.A., an acronym for 'Enhanced Virtual Assistant,' emerges as a game-changer. 
        What sets E.V.A. apart is its unwavering commitment to providing assistance within the University's operational hours, making it an invaluable resource for 
        students, faculty, and staff alike.</p>
      <h4>The time is Now.</h4>
    </div>
  </div>
);

export default Possibility;
