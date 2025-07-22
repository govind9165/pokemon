import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to the Pokedex App</h1>
      <p>Please sign in or sign up to continue.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/signin">
          <button style={{ marginRight: '10px' }}>Sign In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
