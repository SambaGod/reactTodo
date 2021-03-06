import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { addTodoRequest } from './thunks';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='input-group mb-3'>
      <input
        className='form-control'
        type='text'
        placeholder='Type your new todo here'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <div className='input-group-append'>
        <button
          className='btn btn-outline-primary'
          type='button'
          onClick={() => {
            const isDuplicateText = todos.some(
              todo => todo.text === inputValue
            );
            if (!isDuplicateText) {
              onCreatePressed(inputValue);
              setInputValue('');
            }
          }}
        >
          Create Todo
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ todos: getTodos(state) });
const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
