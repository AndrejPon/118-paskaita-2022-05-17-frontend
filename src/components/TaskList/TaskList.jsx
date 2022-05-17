import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TaskList.style';

const TaskList = ({ children }) => {
  return <S.TaskList>{children}</S.TaskList>;
};

TaskList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskList;
