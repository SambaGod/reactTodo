import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='App'>
      <TodoList />
    </div>
  );
};

export default hot(module)(App);
