import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <p>Questions? Contact us.</p>
      <div className="links">
        <ul>
          <li ><a href="">FAQ</a></li>
          <li><a href="">Help Center</a></li>
          <li><a href="">Account</a></li>
          <li><a href="">Media Center</a></li>
          <li><a href="">Investor Relations</a></li>
          <li><a href="">Jobs</a></li>
          <li><a href="">Ways to Watch</a></li>
          <li><a href="">Terms of Use</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Cookie Preferences</a></li>
          <li><a href="">Corporate Information</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Speed Test</a></li>
          <li><a href="">Legal Notices</a></li>
          <li><a href="">Netflix Originals</a></li>
        </ul>
        <div className="language" id="language-btn">
          <i className="fas fa-globe"></i> English
          <i className="fas fa-sort-down lg"></i>
        </div>
        <p>Netflix Kenya</p>
      </div>
    </footer>
  );
};

export default Footer;
