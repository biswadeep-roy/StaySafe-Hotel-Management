import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

import './your-style.css'; 

const Loader = () => <div>Loading...</div>;
const Error = ({ message }) => <div>{message}</div>;
const Success = () => <div>User Registered Successfully</div>;

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const register = async () => {
    if (password === cpassword) {
      const user = { name, email, password };
  
     
      const agreeToTerms = document.getElementById('flexCheckDefault').checked;
  
      if (!agreeToTerms) {
        setRegistrationMessage('Please agree to the Terms of Service');
        setError(true);
        return;
      }
  
      try {
        setLoading(true);
        const response = await axios.post('/api/users/register', user);
  
        if (response.status === 201) {
          setRegistrationMessage('User Registered Successfully');
          setError(false);
        }
      } catch (err) {
        console.log(err);
  
        // Check if the error message contains the specific string
        if (err.response && err.response.data && err.response.data.message) {
          setRegistrationMessage(err.response.data.message);
        } else {
          setRegistrationMessage('Registration failed');
        }
  
        setError(true);
      } finally {
        setLoading(false);
      }
    } else {
      setRegistrationMessage('Passwords do not match');
      setError(true);
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center gradient-custom-3'>
      <div className='mask'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px', height: 'auto', overflow: 'hidden' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={(e) => setName(e.target.value)} />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' onChange={(e) => setCPassword(e.target.value)} />
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <button
            className='w-100 btn btn-primary'
            style={{ padding: '10px', fontSize: '16px' }}
            onClick={register}
          >
            Register
          </button>
          {loading && <Loader />}
          {error && <Error message={registrationMessage} />}
          {!error && registrationMessage && <Success />}
          <div>{error && !registrationMessage && 'An error occurred during registration.'}</div>
          <div className="text-center">
            Have already an account? <a href="/login">Login here</a>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
