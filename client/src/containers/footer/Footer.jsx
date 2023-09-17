import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Check out more of Our Works!</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Check Now</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h1 className='whiteEva'>CHATBOT EVA</h1>
        <p>2400, Dagupan City, Pangasinan   <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Team</h4>
        <p>About Us</p>
        <p>Contact</p>
        <p>Roadmap</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Help Center</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Become One of Us</p>
        <p>0977-106-4430</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023, Capstone Group #9. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
