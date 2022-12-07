export const DATE_FORMAT = 'DD/MM/YYYY';
export const TIME_FORMAT = 'HH:mm:SS';

import {RNKeycloak} from '@react-keycloak/native';

const LOCAL = true;

const REACT_APP_KEYCLOAK_URL_REMOTE =
  'https://keycloak-tsplatform.techsophy.com/auth';
const REACT_APP_KEYCLOAK_URL_LOCAL = 'http://192.168.1.69:8080';
export const REACT_APP_KEYCLOAK_URL = LOCAL
  ? REACT_APP_KEYCLOAK_URL_LOCAL
  : REACT_APP_KEYCLOAK_URL_REMOTE;
export const REACT_APP_KEYCLOAK_REALM = 'techsophy-platform';
export const REACT_APP_KEYCLOAK_CLIENT_ID = 'tp-ui-core';
export const FORGOT_PASSWORD = `${REACT_APP_KEYCLOAK_URL}/realms/${REACT_APP_KEYCLOAK_REALM}/login-actions/reset-credentials?client_id=${REACT_APP_KEYCLOAK_CLIENT_ID}`;

const keycloak = new RNKeycloak({
  url: REACT_APP_KEYCLOAK_URL,
  realm: REACT_APP_KEYCLOAK_REALM,
  clientId: REACT_APP_KEYCLOAK_CLIENT_ID,
});

export default keycloak;
