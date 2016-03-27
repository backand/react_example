import { combineReducers } from 'redux';
import { user } from 'reducers/user';
import { ui } from 'reducers/ui';

export const rootReducer = combineReducers({
  user,
  ui
});
