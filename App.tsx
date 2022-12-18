import {ReactNativeKeycloakProvider} from '@react-keycloak/native';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState, useMemo} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppSettingsContext} from './src/context/appSettings';
import useAsyncStorage from './src/hooks/useAsyncStorage';
import MainStack from './src/navigation/MainStack';
import keycloak from './src/util/constants';
import {theme, theme2, theme3} from './src/util/theme';

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

  const [contextTheme, setContextTheme] = useState('');

  const AppContextObject = {
    theme: contextTheme,
    setTheme: setContextTheme,
  };

  const [storageItem] = useAsyncStorage('theme', contextTheme);

  var mainTheme = useMemo(() => {
    switch (storageItem) {
      case 'Green':
        return theme;
      case 'Blue':
        return theme2;
      case 'Red':
        return theme3;
      default:
        return theme;
    }
  }, [storageItem]);

  return (
    <AppSettingsContext.Provider value={AppContextObject}>
      <PaperProvider theme={mainTheme}>
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
    </AppSettingsContext.Provider>
  );
};

export default App;
