import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from 'store';

import {Root} from 'components/root';

window.store = store;

ReactDOM.render((
  <Provider store={ store }>
    <Root />
  </Provider>
), document.getElementById('root'));
