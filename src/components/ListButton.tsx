import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {withTheme} from 'react-native-paper';
import {SvgProps} from 'react-native-svg';
import {dip} from '../util/function';
import {ChevronRight} from '../util/icons';
import {ThemeOverride} from '../util/theme';
import Text from './Text';
import View from './View';

export type ButtonProps = {
  text: string;
  icon: React.FC<SvgProps>;
};

const Button = (
  buttonProps: {theme: ThemeOverride} & TouchableOpacityProps & ButtonProps
) => {
  const {style, theme, text, ...props} = buttonProps;

  const Icon = buttonProps.icon;
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          backgroundColor: 'transparent',
          height: theme.buttonHeight,
          flexDirection: 'row',
          padding: theme.spacing,
        },
        style,
      ]}>
      {<Icon width={dip(25)} height={dip(25)} color={theme.colors.text} />}
      <Text
        style={{
          fontWeight: '400',
          fontSize: dip(18),
          color: theme.colors.text,
          marginLeft: theme.spacing,
        }}>
        {text}
      </Text>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <ChevronRight
          width={dip(18)}
          height={dip(18)}
          color={theme.colors.divider}
        />
      </View>
    </TouchableOpacity>
  );
};

export default withTheme(Button);
