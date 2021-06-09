import React from 'react';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h3 className='card-title'>{todo.text}</h3>
        <div className='d-flex flex-row-reverse'>
          {todo.isCompleted ? null : (
            <button
              className='btn btn-success ml-2'
              onClick={() => onCompletedPressed(todo.id)}
            >
              Mark as completed
            </button>
          )}
          <button
            className='btn btn-danger'
            onClick={() => onRemovePressed(todo.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
