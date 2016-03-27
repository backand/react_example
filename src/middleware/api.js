import { GET_AUTH_TOKEN_SIMPLE, TODO_GET_ITEMS, TODO_POST_ITEM } from 'constants/action-types';
import { HTTP } from 'utils/http';
import { loginSuccess, loginFailure } from 'actions/login';
import { getItemsSuccess, postItemSuccess } from 'actions/todo';

const apiUrl = 'https://api.backand.com';
const appName = 'angular2';

export function APIMiddleware({ dispatch, getState }) {
  return next => action => {
    const state = getState();
    const authHeader = getAuthHeader(state.user.authType, state.user.accessToken);
    const contentHeader = { 'Content-Type': 'application/x-www-form-urlencoded' };

    switch (action.type) {

      case GET_AUTH_TOKEN_SIMPLE:
        const { username, password } = action.payload;
        const data = { username, password, appName, grant_type: 'password' };

        HTTP.post(`${apiUrl}/token`, data, contentHeader)
          .then(({ access_token }) => dispatch(loginSuccess(access_token, action.payload.type)))
          .catch((err) => dispatch(loginFailure(err.body.error_description)));
        break;

      case TODO_GET_ITEMS:
        HTTP.get(`${apiUrl}/1/objects/todo?returnObject=true`, authHeader)
          .then((data) => dispatch(getItemsSuccess(data)))
          .catch((err) => console.log(`Error: ${err}`));
        break;

      case TODO_POST_ITEM:
        const todo = { description: action.payload.todo };
        HTTP.post(`${apiUrl}/1/objects/todo?returnObject=true`, todo, authHeader)
          .then((data) => dispatch(postItemSuccess(data)))
          .catch((err) => console.log(`Error: ${err}`));
        break;
    }

    return next(action);
  };
}

function getAuthHeader(authType, token) {
  if (authType === 'anonymous') {
    return { AnonymousToken: token };
  }

  return { Authorization: `Bearer ${token}` };
}
