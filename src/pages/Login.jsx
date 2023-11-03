import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Layout from './Layout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setIsLoading] = useState(null)
  const { login, error } = useUser()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Layout />
      <h1>Login</h1>
      {
        loading ? <>loading</>
          :
          <form onSubmit={handleSubmit}>
            {error && <p style={{color: "red"}}>Error. Check your credentials.</p>}
            <div className='form'>
              <input
                type="email"
                name='email'
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='form'>
              <input
                type="password"
                placeholder="Password"
                name='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Login</button>
            <p>
              Dont' have an account? <Link to='/signup' >Signup</Link>
            </p>
          </form>
      }

    </div>
  );
}