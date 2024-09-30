import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
        <a href="/" className="btn">Sign In</a>
      </nav>
      <div className="inner-container">
        <div className="inner-title">
          <h1>Unlimited movies, TV shows, and more.</h1>
        </div>
        <div className="inner-text">
          <p>Watch anywhere. Cancel anytime.</p>
        </div>
        <div className="email-form">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="get-started">
            <input type="text" placeholder="Email address" />
            <a href="/" className="btn-lg">Get started <i className="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </header>
  );
};

export default Header;
