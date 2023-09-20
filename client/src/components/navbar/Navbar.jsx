import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import eva from '../../assets/eva.png'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={eva} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is Chatbot E.V.A?</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Features</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <Link to="/login">
        <p>Sign In</p>
      </Link>
      <Link to="/register">
        <button type="button">Sign Up</button>
      </Link>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is Chatbot E.V.A.?</a></p>
            <p><a href="#possibility">Services</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#blog">Blogs</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
