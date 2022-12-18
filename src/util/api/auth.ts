import axios from 'axios';
import {
  REACT_APP_KEYCLOAK_CLIENT_ID,
  REACT_APP_KEYCLOAK_REALM,
  REACT_APP_KEYCLOAK_URL,
} from '../constants';
import {jsonToURLSearch} from '../function';

export const keyCloakLogin = async (username: string, password: string) => {
  const url = `${REACT_APP_KEYCLOAK_URL}/auth/realms/${REACT_APP_KEYCLOAK_REALM}/protocol/openid-connect/token`;
  console.log('logging in', url);
  const params = {
    grant_type: 'password',
    client_id: REACT_APP_KEYCLOAK_CLIENT_ID,
    // client_secret: '<the client secret>',
    username: username,
    password: password,
  };
  const form = jsonToURLSearch(params);
  const result = await axios.post(url, form, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Authorization: '',
    },
  });
  return result;
};
