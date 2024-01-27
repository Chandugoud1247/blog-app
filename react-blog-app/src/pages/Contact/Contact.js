// Contact.js
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contactContainer">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us through the following channels:</p>

      <div className="socialLinks">
        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <p>Or, you can use the form below:</p>

      <form className="contactForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

