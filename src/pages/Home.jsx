import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Layout from './Layout';

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
      <Layout />
      <h1>Home Page</h1>
      <p>You need to login to view the dashboard</p>
    </div>
  );
}
