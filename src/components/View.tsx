import React from 'react';
import {View as RNView, ViewProps} from 'react-native';
import {withTheme} from 'react-native-paper';
import {ThemeOverride} from '../util/theme';

const View = (props: ViewProps & {theme: ThemeOverride}) => {
  return (
    <RNView
      {...props}
      style={[{backgroundColor: props.theme.colors.background}, props.style]}
    />
  );
};

export default withTheme(View);
