import {LOGIN_FAILURE} from 'constants/action-types';

const initialState = {};

export function ui(state = initialState, action) {

  switch (action.type) {

    case LOGIN_FAILURE:
      console.log('auth status', action.payload.message);
      return Object.assign({}, state, { authStatus: action.payload.message, authError: true });
  }

  return state;
}
