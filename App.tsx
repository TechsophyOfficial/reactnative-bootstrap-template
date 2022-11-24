import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {Provider as PaperProvider} from 'react-native-paper';
import MainStack from './src/navigation/MainStack';
import {theme} from './src/util/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const init = async () => {
      // Loading stuff
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Hide Bootsplash');
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
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer onReady={() => RNBootSplash.hide()}>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
