// src/components/Logout.jsx
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');  // Clear token
    navigate('/signin');               // Redirect to Sign In
  }, [navigate]);

  return null; // You can show "Logging out..." if desired
}

export default Logout;
