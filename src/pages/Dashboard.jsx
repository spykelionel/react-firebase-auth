import React from 'react';
import { Navigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function Dashboard() {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user.email}!</p>
    </div>
  );
}