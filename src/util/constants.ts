export const DATE_FORMAT = 'DD/MM/YYYY';
export const TIME_FORMAT = 'HH:mm:SS';

import {RNKeycloak} from '@react-keycloak/native';

const LOCAL = false;
const DEV = true;

const REACT_APP_KEYCLOAK_URL_REMOTE =
  'https://keycloak-tsplatform.techsophy.com';
const REACT_APP_KEYCLOAK_URL_LOCAL = 'http://192.168.1.69:8080';
export const REACT_APP_KEYCLOAK_URL = LOCAL
  ? REACT_APP_KEYCLOAK_URL_LOCAL
  : REACT_APP_KEYCLOAK_URL_REMOTE;
export const REACT_APP_KEYCLOAK_REALM = 'ts-ui-components';
export const REACT_APP_KEYCLOAK_CLIENT_ID = 'tp-ui-core';
export const FORGOT_PASSWORD = `${REACT_APP_KEYCLOAK_URL}/realms/${REACT_APP_KEYCLOAK_REALM}/login-actions/reset-credentials?client_id=${REACT_APP_KEYCLOAK_CLIENT_ID}`;

const keycloak = new RNKeycloak({
  url: `${REACT_APP_KEYCLOAK_URL}/auth`,
  realm: REACT_APP_KEYCLOAK_REALM,
  clientId: REACT_APP_KEYCLOAK_CLIENT_ID,
});

const DEV_PAYPAL_CHECKOUT = (id: string) =>
  'https://www.sandbox.paypal.com/checkoutnow?token=' + id;
const PROD_PAYPAL_CHECKOUT = (id: string) =>
  'https://www.paypal.com/checkoutnow?token=' + id;
export const PAYPAL_CHECKOUT = DEV ? DEV_PAYPAL_CHECKOUT : PROD_PAYPAL_CHECKOUT;

export default keycloak;

export const STRIPE_KEYS = {
  publishable_key:
    'pk_test_C23mx7I5sszh',
  secret_key:
    'sk_test_secretekey',
};

export const RAZORPAY_KEYS = {
  merchant_id: 'Merchant_id',
  key_id: 'RAZOR_PAY KEY ID',
  key_secret: 'Client Secret',
};

export const SXP = {
  pid: '621ca957d3f3cc052418505f',
  url: 'https://sxp.channel-adapter.k8s.techsophy.com/',
  path: '/socket.io/',
  appId: 'working',
  version: 'WORKING',
};

export const SXPCommands = {
  restart: '::restart',
  start: 'sample',
};
