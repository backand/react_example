import superagent from 'superagent';
import { GET_AUTH_TOKEN_SIMPLE, USE_ANONYMOUS_AUTH } from 'constants/action-types';
import { loginSuccess, loginFailure } from 'actions/login';

export function APIMiddleware({ dispatch, getState }) {
  return next => action => {

    console.log(action);

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
    }

    return next(action);
  };
}
