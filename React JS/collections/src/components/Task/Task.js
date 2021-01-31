import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

const Task = ({
  text,
  priority,
  completed,
  onDeleteTask,
  onUpdateCompleted,
  onEditTask,
}) => (
  <div className={`${styles.task} ${styles[`${priority}Priority`]}`}>
    <p className={styles.text}>{text}</p>

    <hr />
    <div className={styles.actions}>
      <button type="button" onClick={onDeleteTask}>
        Delete
      </button>
      <button type="button" onClick={onEditTask}>
        Edit
      </button>

      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={onUpdateCompleted}
        />
      </label>
    </div>
  </div>
);

Task.propTypes = {
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdateCompleted: PropTypes.func.isRequired,
};

export default Task;
