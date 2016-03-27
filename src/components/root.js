import React from 'react';

import Login from 'components/login';
import TodoList from 'components/todo-list';

export const Root = () => {
  return (
    <div className="container">
      <h1>Hello, Backand!</h1>

      <Login />
      <hr/>
      <TodoList />
    </div>
  )
};
