import React from 'react';
import {TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {withTheme} from 'react-native-paper';
import {dip} from '../util/function';
import {ThemeOverride} from '../util/theme';
import Text from './Text';

export type ButtonProps = {
  text: string;
  textStyle?: TextStyle;
};

const BlankButton = (
  buttonProps: {theme: ThemeOverride} & TouchableOpacityProps & ButtonProps
) => {
  const {style, theme, text, textStyle, ...props} = buttonProps;
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          borderRadius: theme.roundness,
          backgroundColor: 'transparent',
          height: theme.buttonHeight,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}>
      <Text
        style={[
          {
            fontWeight: '400',
            fontSize: dip(18),
            color: theme.colors.disabled,
          },
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default withTheme(BlankButton);
