import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Layout from './Layout';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useUser()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Layout />
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
       <div className="form">
       <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
       </div>

        <div className="form">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} 
        />
        </div>

        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link> </p>
      </form>
    </div>
  );
}