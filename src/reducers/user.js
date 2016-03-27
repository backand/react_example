import {LOGIN_SUCCESS, LOGIN_FAILURE} from 'constants/action-types';

const initialState = { accessToken: null, authType: 'N/A' };

export function user(state = initialState, action) {

  switch (action.type) {

    case LOGIN_SUCCESS:
      const { accessToken, authType } = action.payload;
      return Object.assign({}, state, {
        accessToken,
        authType,
        authStatus: 'OK'
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        authStatus: action.payload.message,
        authError: true
      });
  }

  return state;

}
