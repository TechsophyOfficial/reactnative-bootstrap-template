import {useKeycloak} from '@react-keycloak/native';

const useOnlyKeycloak = () => {
  const [keycloak] = useKeycloak();
  if (typeof keycloak === 'boolean' || keycloak === undefined) {
    return {keycloak: undefined, profile: undefined};
  } else {
    return {keycloak: keycloak, profile: keycloak.idTokenParsed as any};
  }
};

export default useOnlyKeycloak;
