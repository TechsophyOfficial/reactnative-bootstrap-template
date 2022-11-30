export const DATE_FORMAT = 'DD/MM/YYYY';
export const TIME_FORMAT = 'HH:mm:SS';

import {RNKeycloak} from '@react-keycloak/native';

export const REACT_APP_KEYCLOAK_URL =
  'https://keycloak-tsplatform.techsophy.com';
export const REACT_APP_KEYCLOAK_REALM = 'techsophy-platform';
export const REACT_APP_KEYCLOAK_CLIENT_ID = 'tp-ui-core';

const keycloak = new RNKeycloak({
  url: `${REACT_APP_KEYCLOAK_URL}/auth`,
  realm: REACT_APP_KEYCLOAK_REALM,
  clientId: REACT_APP_KEYCLOAK_CLIENT_ID,
});

export default keycloak;
