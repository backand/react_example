import React from 'react';

import Login from 'components/login';

export const Root = () => {
  const noop               = () => {};
  const getAuthTokenSimple = noop;
  const useAnoymousAuth    = noop;
  const getQuote           = noop;
  const postItem           = noop;

  const auth_type = 1;
  const auth_status = 'bla';

  return (
    <div className="container">
      <h1>Hello, Backand!</h1>

      <Login />

      <hr/>
      ADD TODO: <input name="todo-input"/>
      <div>
        <button onClick={ getQuote } className="btn btn-success">Get Items</button>
        <button onClick={postItem } className="btn btn-warning">Post Item</button>
      </div>
      <br/>
      <label>Result:</label>
      <ul className="list-group">
        <li className="list-group-item"></li>
      </ul>
    </div>
  )
};
