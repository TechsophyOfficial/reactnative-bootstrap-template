import {ReactNativeKeycloakProvider} from '@react-keycloak/native';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {Provider as PaperProvider} from 'react-native-paper';
import useAsyncStorage from './src/hooks/useAsyncStorage';
import MainStack from './src/navigation/MainStack';
import keycloak from './src/util/constants';
import {theme, theme2} from './src/util/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const init = async () => {
      // Loading stuff
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? theme.colors.background
      : theme.colors.background,
    flex: 1,
  };

  const [storageItem, _updateStorageItem, _clearStorageItem] =
    useAsyncStorage('theme');

  console.log(storageItem);
  return (
    <PaperProvider theme={storageItem === '1' ? theme : theme2}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ReactNativeKeycloakProvider
          authClient={keycloak}
          initOptions={{
            redirectUri: 'techsophy://Homepage',
            postLogoutRedirectUri: 'techsophy://Homepage',
            inAppBrowserOptions: {},
          }}>
          <NavigationContainer onReady={() => RNBootSplash.hide()}>
            <MainStack />
          </NavigationContainer>
        </ReactNativeKeycloakProvider>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
