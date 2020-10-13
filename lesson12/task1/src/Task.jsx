import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ done, text, id, onToggleTask, onDelete }) => {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={listItemClasses}>
      <input
        onClick={() => onToggleTask(id)}
        defaultChecked={done}
        type="checkbox"
        className="list-item__checkbox"
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn" onClick={() => onDelete(id)}>

      </button>
    </li>
  )
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool,
  text: PropTypes.string,
  onToggleTask: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

Task.defaultProps = {
  done: false,
  text: ''
}

export default Task;