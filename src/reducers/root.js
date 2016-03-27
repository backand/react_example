import { combineReducers } from 'redux';
import { user } from 'reducers/user';
import { ui } from 'reducers/ui';
import { todos } from 'reducers/todos';

export const rootReducer = combineReducers({
  user,
  ui,
  todos
});
