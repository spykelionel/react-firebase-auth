import React from 'react';
import { Navigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Layout from './Layout';

export default function Dashboard() {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Layout />
      <h1>Dashboard</h1>
      <p className='success'>Welcome {user.email}!</p>
    </div>
  );
}