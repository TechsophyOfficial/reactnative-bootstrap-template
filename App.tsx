import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigator from './src/Navigation/MainNavigator';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n/i18n';

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <MainNavigator />
      </I18nextProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
