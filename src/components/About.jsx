import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
        <video className="background-video" autoPlay muted loop>
        <source src="/videos/about-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>About the Pokédex App</h1>

      <section className="about-section">
        <h2>🌟 Welcome Trainers!</h2>
        <p>
          This Pokédex web application is your personal digital encyclopedia for all known Pokémon species! 
          Inspired by the original concept from the Pokémon universe, it allows fans to explore, discover, 
          and learn about their favorite creatures.
        </p>
      </section>

      <section className="about-section">
        <h2>🎯 Purpose</h2>
        <p>
          The app is designed to help users:
          <ul>
            <li>Browse and explore various Pokémon</li>
            <li>Search for detailed stats of any Pokémon</li>
            <li>Add their own Pokémon entries</li>
            <li>Read unique Pokémon backstories</li>
            <li>Manage secure login and logout</li>
          </ul>
        </p>
      </section>

      <section className="about-section">
        <h2>⚙️ Features</h2>
        <ul>
          <li>🧾 Authentication system (Sign In / Sign Up)</li>
          <li>🔒 Protected routes (Accessible only after login)</li>
          <li>🔍 Real-time Pokémon search with instant results</li>
          <li>📚 Story section featuring custom Pokémon lore</li>
          <li>✨ Pikachu-themed animated background & effects</li>
          <li>📱 Fully responsive design for mobile and desktop</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>💻 Technologies Used</h2>
        <ul>
          <li>ReactJS (Frontend)</li>
          <li>React Router DOM (Navigation & Protected Routes)</li>
          <li>Axios (API requests)</li>
          <li>Express & MongoDB (Backend & Database)</li>
          <li>React Toastify (Notifications)</li>
          <li>Custom CSS & Pikachu-themed design</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🚀 Future Plans</h2>
        <ul>
          <li>Live battle simulation between Pokémon</li>
          <li>User profile and Pokémon collection</li>
          <li>Leaderboard and trainer rankings</li>
          <li>Trading system between users</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>💬 Feedback</h2>
        <p>
          Have ideas to make the app better? Reach out on the contact section — we’d love to hear your suggestions!
        </p>
      </section>
    </div>
  );
};

export default About;
