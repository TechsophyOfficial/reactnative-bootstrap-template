import { NavigationContainer } from '@react-navigation/native';
import { useRef } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import MainNavigator from './src/Navigation/MainNavigator';
import store from './src/Redux/Store';

const App = () => {
  const colorScheme: any = useColorScheme();
  const navigationRef: any = useRef<any>(null);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
      <StatusBar
        hidden={false}
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
