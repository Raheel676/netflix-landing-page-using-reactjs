import React from 'react';
import './style.css';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      icon: 'tv', 
    },
    {
      id: 2,
      title: 'Download your shows to watch offline',
      description: 'Save your favorites easily and always have something to watch.',
      icon: 'download', 
    },
    {
      id: 3,
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      icon: 'devices', 
    },
    {
      id: 4,
      title: 'Create profiles for kids',
      description: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.',
      icon: 'account', 
    },
  ];

  return (
    <section className="feature-cards">
      {features.map((feature) => (
        <div key={feature.id} className="feature-card">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>

        <br /><br /><br /> <br /><br /><br />
          <i className={`material-icons ${feature.icon}-icon`}>{feature.icon}</i>
        </div>
      ))}
    </section>
  );
};

export default FeatureCards;
