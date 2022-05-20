import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';
import TaskList from '../components/TaskList/TaskList';

const getData = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/content`, {
      headers: {
        authorization: `Bearer: ${localStorage.getItem('token')}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

const Add = () => {
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [reload, setReload] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(
    () => async () => {
      setData(await getData());
    },
    [reload]
  );

  const addTask = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/content`, {
        method: 'POST',
        headers: {
          authorization: `Bearer: ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: newTask }),
      });
      const data = await res.json();
      setNewTask('');
      setReload(!reload);
      alert(data.msg || data.err || 'Unknown error');
    } catch (error) {
      alert(error.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  if (data.error) {
    alert('Something went wrong');
  }

  return (
    <>
      <Header>Todo App</Header>
      <Section margin='0 auto' padding='1rem'>
        <Button handleClick={logout}>Logout</Button>
        {data.length === 0 && (
          <Section>No tasks found, please add one:</Section>
        )}
        {data.length > 0 && <TaskList></TaskList>}
      </Section>
      <Section margin='0 auto' padding='1rem'>
        <form onSubmit={addTask}>
          <Input
            name='todo'
            placeholder='My new task'
            label='Add a new task'
            type='text'
            initValue={newTask}
            handleChange={(value) => setNewTask(value)}
          />
          <Button loading={loading}>Add</Button>
        </form>
      </Section>
    </>
  );
};

export default Add;
