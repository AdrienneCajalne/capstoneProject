import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'No more long Clinic Queues.',
    text: 'The days of enduring long queues in the clinic are over, thanks to the innovative healthcare solutions offered by Chatbot E.V.A. This revolutionary clinical aid technology has transformed the way we access medical assistance, making the process faster, more efficient, and hassle-free..',
  },
  {
    title: 'We are continuously Learning.',
    text: 'Indeed, within the realm of Chatbot E.V.A., the concept of continuous learning takes on a special significance. E.V.A. is not just a static virtual assistant; it is a dynamic and evolving entity dedicated to enhancing its knowledge and capabilities to better serve its users.',
  },
  {
    title: 'Accessible within University Hours.',
    text: 'The accessibility of Chatbot E.V.A. within campus hours is a significant boon for the academic community it serves. E.V.A.s availability during these designated hours ensures that students, faculty, and staff can conveniently access its healthcare support services when they are needed the most.',
  },
  {
    title: 'Ask the Developers 24/7.',
    text: 'We are here to assist and provide information to the best of our abilities, 24/7. If you have any questions or in need of assistance with anything related to Chatbot E.V.A. or any other topic, feel free to ask, and We will do our best to help you.',
  }
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Become more Comfortable and Convenient as Chatbot EVA is one Click away!</h1>
      <p>Sign Up to have a better University Experience</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
