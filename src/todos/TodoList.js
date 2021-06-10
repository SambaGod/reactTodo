import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from './selectors';
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from './thunks';

const BigRedTitle = styled.div`
  font-size: 5em;
  color: red;
`;

const TodoList = ({
  completedTodos,
  inCompleteTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading Todos ...</div>;
  const content = (
    <div className='container'>
      <BigRedTitle>This is a Todo List!</BigRedTitle>
      <NewTodoForm />
      <h3>Incomplete Todos:</h3>
      {inCompleteTodos.map(todo => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Completed Todos:</h3>
      {completedTodos.map(todo => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  inCompleteTodos: getIncompleteTodos(state),
});
const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
