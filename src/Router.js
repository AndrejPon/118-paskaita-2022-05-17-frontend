import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import Login from './pages/Login';
import Register from './pages/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
