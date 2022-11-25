import React from 'react';
import {withTheme} from 'react-native-paper';
import {ThemeOverride} from '../util/theme';
import Text from './Text';
import View from './View';

const ListItem = ({theme}: {theme: ThemeOverride}) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.surface,
        borderRadius: theme.roundness,
      }}>
      <Text>ListItem</Text>
    </View>
  );
};

export default withTheme(ListItem);
