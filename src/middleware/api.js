import superagent from 'superagent';
import { GET_AUTH_TOKEN_SIMPLE, TODO_GET_ITEMS, TODO_POST_ITEM } from 'constants/action-types';
import { loginSuccess, loginFailure } from 'actions/login';
import { getItemsSuccess, postItemSuccess } from 'actions/todo';

export function APIMiddleware({ dispatch, getState }) {
  return next => action => {

    console.log(action);

    const state = getState();
    const authHeader = getAuthHeader(state.user.authType, state.user.accessToken);

    switch (action.type) {

      case GET_AUTH_TOKEN_SIMPLE:
        const { username, password } = action.payload;

        superagent.post(`https://api.backand.com/token`)
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({
            username,
            password,
            appName: 'angular2',
            grant_type: 'password'
          })
          .end((err, resp) => {
            console.log(resp);
            if (err || !resp.body.access_token) {
              dispatch(loginFailure(resp.body.error_description));
              return;
            }

            dispatch(loginSuccess(resp.body.access_token, action.payload.type));
          });
        break;

      case TODO_GET_ITEMS:
        superagent.get(`https://api.backand.com/1/objects/todo?returnObject=true`)
          .set(authHeader.name, authHeader.value)
          .end((err, resp) => {
            if (err) {
              console.error(`Error: ${err}`);
              return;
            }

            dispatch(getItemsSuccess(resp.body));
          });
        break;

      case TODO_POST_ITEM:
        superagent.post(`https://api.backand.com/1/objects/todo?returnObject=true`)
          .set(authHeader.name, authHeader.value)
          .send({ description: action.payload.todo })
          .end((err, resp) => {
            if (err) {
              console.error(`Error: ${err}`);
              return;
            }

            dispatch(postItemSuccess(resp.body));
          });
        break;
    }

    return next(action);
  };
}

function getAuthHeader(authType, token) {
  if (authType === 'anonymous') {
    return { name: 'AnonymousToken', value: token };
  }

  return { name: 'Authorization', value: `Bearer ${token}` };
}
