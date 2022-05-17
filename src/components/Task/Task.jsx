import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Task.style';

const Task = ({ children }) => {
  return <S.Task>{children}</S.Task>;
};

Task.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Task;
