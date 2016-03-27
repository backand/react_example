import { LOGIN_SUCCESS, USE_ANONYMOUS_AUTH } from 'constants/action-types';

const initialState = { accessToken: null };

export function user(state = initialState, action) {

  switch (action.type) {

    case LOGIN_SUCCESS:
      return Object.assign({}, state, { accessToken: action.payload.accessToken, authType: action.payload.authType });
  }

  return state;

}
