import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function Home() {
  const { user } = useUser()
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); 
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>You need to login to view the dashboard</p>
    </div>
  );
}
