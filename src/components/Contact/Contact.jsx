// src/components/Contact/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <h2>Contact the Pokémon League</h2>
        <p>Have questions, feedback, or want to report a missing Pikachu? Send us a message!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Email: support@pokemonleague.com</p>
          <p>Phone: +1 (800) 123-POKE</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
