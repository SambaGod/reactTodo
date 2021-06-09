import React from 'react';

const TodoListItem = ({ todo }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h3 className='card-title'>{todo.text}</h3>
        <div className='d-flex flex-row-reverse'>
          <button className='btn btn-success ml-2'>Mark as completed</button>
          <button className='btn btn-danger'>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
