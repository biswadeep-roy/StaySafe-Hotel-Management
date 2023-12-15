
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

import {
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

import './your-style.css';

const Loader = () => <div>Loading...</div>;
const Error = ({ message }) => <div>{message}</div>;
const Success = () => <div>Login successful</div>;

function LoginScreen() {
  const navigate = useNavigate(); // Change the hook to useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = async () => {
    const user = {
      email,
      password,
    };

    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);

      if (response.data) {
        setLoginMessage('Login successful');
        setError(false);

        // Redirect to /home after 3 seconds
        setTimeout(() => {
          navigate('/home'); // Use navigate instead of history.push
        }, 5000);
      } else {
        setLoginMessage('Login failed');
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setLoginMessage('Login failed');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='gradient-custom-3 d-flex align-items-center justify-content-center min-vh-100'>
      <MDBCard className='m-5' style={{ maxWidth: '600px', height: 'auto', overflow: 'hidden' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Login</h2>
          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form1' type='text' onChange={(e) => setEmail(e.target.value)} />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form2' type='password' onChange={(e) => setPassword(e.target.value)} />
          <button
            className='w-100 btn btn-primary'
            style={{ padding: '10px', fontSize: '16px' }}
            onClick={login}
          >
            Login
          </button>
          {loading && <Loader />}
          {error && <Error message={loginMessage} />}
          {!error && loginMessage && <Success />}
          <div>{error && !loginMessage && 'Login failed. Please try again.'}</div>
          <div className="text-center">
            Don't have an account? <a href="/register">Register here</a>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default LoginScreen;
