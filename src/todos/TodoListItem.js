import React from 'react';
import styled from 'styled-components';

const CreatedAtContainer = styled.div`
  font-size: 12pt;
  color: gray;
`;

const CreatedAtContainerWithLogic = styled(CreatedAtContainer)`
  border-bottom: ${props =>
    new Date(props.createdAt) > new Date(Date.now() - 864000 * 5)
      ? 'none'
      : '2px solid red'};
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  Container = todo.isCompleted
    ? CreatedAtContainer
    : CreatedAtContainerWithLogic;
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
        <Container createdAt={todo.createdAt}>
          {new Date(todo.createdAt).toLocaleDateString()}
        </Container>
      </div>
    </div>
  );
};

export default TodoListItem;
