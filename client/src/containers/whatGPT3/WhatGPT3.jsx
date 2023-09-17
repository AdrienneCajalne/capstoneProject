import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Chatbot E.V.A. ?" text="A university website integrates a clinical chatbot to provide comprehensive healthcare support. This bot assists 
      students and staff with medical queries, appointment scheduling, and health information. It enhances campus well-being, offering personalized guidance, 
      promoting health awareness, and ensuring easy access to healthcare resources, contributing to a healthier campus community." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Immense aid within the University</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbot E.V.A." text="The acronym 'E.V.A.'stands for 'Enhanced Virtual Assistant'. It can assist you in your clinical needs inside the University. 
      E.V.A. is more than just a chatbot; it is a clinical companion, a virtual healthcare expert that resides within the virtual realm of your university's online ecosystem. 
      Its primary role is to assist students, faculty, and staff in addressing their medical concerns, providing quick and reliable healthcare information, and even offering 
      personalized guidance." />

      <Feature title="Knowledge Based" text="A clinical chatbot is considered knowledge-based because it relies on a structured database of medical knowledge, 
      including information about diseases, symptoms, treatments, and healthcare protocols. This knowledge base enables the chatbot to provide accurate and 
      informed responses to medical inquiries, offer diagnoses, recommend treatments, and assist with healthcare-related tasks" />

      <Feature title="Clinical" text="A Chatbot for clinical needs that provides guidance and assistance as well as other features. E.V.A. is not just another chatbot; 
      it represents a revolution in clinical aid and healthcare support. Its core mission is to empower individuals with timely, reliable, and personalized healthcare guidance, 
      making it a true ally in the journey toward wellness." />
      
    </div>
  </div>
);

export default WhatGPT3;
