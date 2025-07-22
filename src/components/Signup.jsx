import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error("All fields are required");
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      toast.success('Registered successfully!');
      setTimeout(() => navigate('/signin'), 2000);
    } catch (err) {
      toast.error('Registration failed!');
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
        <h2>Sign Up</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </form>
    </div>
  );
}

export default Signup;
