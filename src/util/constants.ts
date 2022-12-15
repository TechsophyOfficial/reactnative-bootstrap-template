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

export const stripe = {
  publishable_key:
    'pk_test_51MEGqOSH315QcFT6FAC23mx7Izl41zm0AXNNJBPDDLFIXjWrLZHPxGRUyy32fplYf3u3PXKzLRvOVPe8mKIZ9jAN00rpj5sszh',
  secret_key:
    'sk_test_51MEGqOSH315QcFT6neqtR8jzXptu92lLtFwIsxhCtmMxgTAtDjhMzVNPx90uRnexEuzRejkbqEE3RrhNBMDuXlem00ck842pDI',
};

export const razorpay = {
  merchant_id: 'Kr6AuC9NTG3YXf',
  key_id: 'rzp_test_N9aVLRM92gT1CY',
  key_secret: 'BJf0iFxatZJYb7jxtlbRULbY',
};
