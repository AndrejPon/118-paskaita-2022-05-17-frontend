import React from 'react';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';

const Login = () => {
  return (
    <>
      <Header>Todo App</Header>
      <Section margin='0 auto' padding='1rem'>
        <Input
          name='email'
          placeholder='Your email address'
          label='Email address'
          type='email'
        />
        <Input
          name='password'
          placeholder='Your password'
          label='Password'
          type='password'
        />
        <Button>Login</Button>
      </Section>
    </>
  );
};

export default Login;
