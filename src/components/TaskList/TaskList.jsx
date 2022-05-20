import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TaskList.style';
import Task from '../Task/Task';

const TaskList = ({ tasks, handleClick }) => (
  <S.TaskList>
    {tasks &&
      tasks.map((task) => (
        <Task key={task.id} handleClick={() => handleClick(task.id)}>
          {task.task}
        </Task>
      ))}
  </S.TaskList>
);
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TaskList;
