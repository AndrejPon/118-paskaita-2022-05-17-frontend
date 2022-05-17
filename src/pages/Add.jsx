import React from 'react';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';

const Add = () => {
  return (
    <>
      <Header>Todo App</Header>
      <Section margin='0 auto' padding='1rem'>
        <Input
          name='todo'
          placeholder='My new task'
          label='Add a new task'
          type='text'
        />
        <Button>Add</Button>
      </Section>
    </>
  );
};

export default Add;
