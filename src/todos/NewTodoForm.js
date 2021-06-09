import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';

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

const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
