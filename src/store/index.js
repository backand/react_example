import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from 'reducers/root';

import {APIMiddleware} from 'middleware/api';

export const store = createStore(rootReducer, applyMiddleware(APIMiddleware));
