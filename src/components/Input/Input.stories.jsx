import React from 'react';
import Input from './Input';
import Label from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => (
  <Input label='Add a new task' name='todo' placeholder='' type='text' />
);
