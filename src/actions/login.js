import { 
  GET_AUTH_TOKEN_SIMPLE, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE 
} from 'constants/action-types';

export function getAuthTokenSimple(username, password) {
  return { type: GET_AUTH_TOKEN_SIMPLE, payload: { username, password, type: 'token' } };
}

export function useAnonymousAuth() {
  return loginSuccess("589603b5-ea43-4551-8162-fe3b2f655e86", 'anonymous');
}

export function loginSuccess(accessToken, username, authType) {
  return { type: LOGIN_SUCCESS, payload: { accessToken, username, authType } };
}

export function loginFailure(message) {
  return { type: LOGIN_FAILURE, payload: { message } };
}
