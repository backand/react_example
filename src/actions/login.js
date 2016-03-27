import { 
  GET_AUTH_TOKEN_SIMPLE, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE 
} from 'constants/action-types';

export function getAuthTokenSimple(username, password) {
  return { type: GET_AUTH_TOKEN_SIMPLE, payload: { username, password, type: 'token' } };
}

export function useAnonymousAuth() {
  return loginSuccess("08fd510a-4b52-43fa-938f-f2c841bd3106", 'anonymous');
}

export function loginSuccess(accessToken, authType) {
  return { type: LOGIN_SUCCESS, payload: { accessToken, authType } };
}

export function loginFailure(message) {
  return { type: LOGIN_FAILURE, payload: { message } };
}
