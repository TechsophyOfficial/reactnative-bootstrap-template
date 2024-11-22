import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../Redux/Hooks';
import {decrement, increment} from '../../Redux/reducers/CounterSlice';
import {useTranslation} from 'react-i18next';

const Login = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  const count = useAppSelector((state: any) => state.counter.value);
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state: any) => state.theme.theme);

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text style={styles.text}>Counter: {count}</Text>
      <View style={styles.buttons}>
        <Button
          title={t('counter.increment')}
          onPress={() => navigation.navigate('HomeNavigator')}
        />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
