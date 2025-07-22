import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Pokedex App</h1>
      <p>Please <Link to="/signin">Sign In</Link> or <Link to="/signup">Sign Up</Link> to continue.</p>
    </div>
  );
}

export default LandingPage;
