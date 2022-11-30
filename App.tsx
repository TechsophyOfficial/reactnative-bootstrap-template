import {ReactNativeKeycloakProvider} from '@react-keycloak/native';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {Provider as PaperProvider} from 'react-native-paper';
import MainStack from './src/navigation/MainStack';
import keycloak from './src/util/constants';
import {theme} from './src/util/theme';

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

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ReactNativeKeycloakProvider
          authClient={keycloak}
          initOptions={{
            redirectUri: 'techsophy://Homepage',
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
