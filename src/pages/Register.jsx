import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';

const Register = () => {
  // const [error, setError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onRegister = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        }
      );
      const data = await res.json();
      console.log('data ===', data);
      alert(data.msg || data.err || 'Unknown Issue');
      navigate('/login');
    } catch (error) {
      alert(error.message || 'Unexpected Issue');
    }
  };
  return (
    <>
      <Header>Todo App</Header>
      <Section margin='0 auto' padding='1rem'>
        <form onSubmit={onRegister}>
          <Input
            name='email'
            placeholder='Your email address'
            label='Email address'
            type='email'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, email: value })
            }
          />
          <Input
            name='password'
            placeholder='Your password'
            label='Password'
            type='password'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, password: value })
            }
          />
          <Button>Register</Button>
        </form>
      </Section>
    </>
  );
};

export default Register;
