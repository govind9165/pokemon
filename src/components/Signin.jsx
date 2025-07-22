import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css';

function Signin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', form);
      localStorage.setItem('token', res.data.token);
      toast.success('Login successful!');
      setTimeout(() => navigate('/pokedex'), 2000);
    } catch (err) {
      toast.error('Login failed!');
    }
  };

  return (
    <div className="auth-container">
     <video autoPlay muted loop className="auth-video">
        <source src="/videos/pikachu-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  <ToastContainer />
  <form onSubmit={handleSubmit} className="auth-form">
        <h2>Sign In</h2>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}

export default Signin;
