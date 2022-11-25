import React from 'react';
import {ViewProps} from 'react-native';
import {withTheme} from 'react-native-paper';
import {dip} from '../util/function';
import {Tick} from '../util/icons';
import {ThemeOverride} from '../util/theme';
import View from './View';

const Checkbox = (
  props: {checked: boolean; theme: ThemeOverride} & ViewProps
) => {
  const {checked, theme, ...viewProps} = props;
  return (
    <View
      {...viewProps}
      style={[
        {
          width: dip(20),
          height: dip(20),
          backgroundColor: theme.colors.disabled,
          borderRadius: Math.min(theme.roundness, dip(6)),
          alignItems: 'center',
          justifyContent: 'center',
        },
        viewProps.style,
      ]}>
      {checked && (
        <Tick width={dip(12)} height={dip(12)} color={theme.colors.lightText} />
      )}
    </View>
  );
};

export default withTheme(Checkbox);
