import React, { useState } from 'react';

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div class='input-group mb-3'>
      <input
        className='form-control'
        type='text'
        placeholder='Type your new todo here'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <div class='input-group-append'>
        <button className='btn btn-outline-primary' type='button'>
          Create Todo
        </button>
      </div>
    </div>
  );
};

export default NewTodoForm;
