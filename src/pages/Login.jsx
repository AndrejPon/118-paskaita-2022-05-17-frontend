import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onLogin = async (event) => {
    console.log('onLogin ===', onLogin);
    event.preventDefault();

    try {
      console.log('try ===');
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        }
      );
      console.log('data0===');
      const data = await res.json();
      console.log('data===', data);
      console.log(data.token);
      if (!data.token) {
        return alert(data.err || 'Unknown Issue');
      }
      localStorage.setItem('token', data.token);
      console.log(data.token);
      navigate('/');
    } catch (error) {
      alert(error.message || 'Unexpected Issue');
    }
  };
  return (
    <>
      <Header>Todo App</Header>
      <Section margin='0 auto' padding='1rem'>
        <form onSubmit={onLogin}>
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
          <Button>Login</Button>
        </form>
      </Section>
    </>
  );
};

export default Login;
