import React from 'react';
import {withTheme} from 'react-native-paper';
import {ThemeOverride} from '../util/theme';
import View from './View';

const Divider = ({theme}: {theme: ThemeOverride}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 0.1,
        backgroundColor: theme.colors.divider,
      }}
    />
  );
};

export default withTheme(Divider);
