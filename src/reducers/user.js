import { LOGIN_SUCCESS, USE_ANONYMOUS_AUTH } from 'constants/action-types';

const initialState = { accessToken: null, authType: 'N/A' };

export function user(state = initialState, action) {

  switch (action.type) {

    case LOGIN_SUCCESS:
      const { accessToken, authType } = action.payload;
      return Object.assign({}, state, { accessToken, authType, authStatus: 'OK' });
  }

  return state;

}
