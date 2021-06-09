import React from 'react';

const TodoListItem = ({ todo, onRemovePressed }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h3 className='card-title'>{todo.text}</h3>
        {console.log(todo.text)}
        <div className='d-flex flex-row-reverse'>
          <button className='btn btn-success ml-2'>Mark as completed</button>
          <button
            className='btn btn-danger'
            onClick={() => onRemovePressed(todo.text)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
