import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">E.V.A.: Your Clinical Companion inside PHINMA Walls</h1>
      <p>E.V.A. transcends the boundaries of traditional healthcare by leveraging technology to provide a wide range of healthcare support services within the academic setting. 
        Its core mission is to promote the well-being of those within PHINMA's educational institutions, ensuring that healthcare assistance is readily available, user-friendly, 
        and reliable.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <p>By entering your email address, you will be receiving updates, news, promotions, or information from this website.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
