import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {withTheme} from 'react-native-paper';
import {dip} from '../util/function';
import {Content, Home, Profile, Share} from '../util/icons';
import {ThemeOverride} from '../util/theme';
import View from './View';

const NavBar = (props: BottomTabBarProps & {theme: ThemeOverride}) => {
  const iconSize = dip(26);
  const {theme} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        height: dip(70),
        width: '100%',
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: theme.paddingHorizontal,
      }}>
      <Home width={iconSize} height={iconSize} color={theme.colors.primary} />
      <Content
        width={iconSize}
        height={iconSize}
        color={theme.colors.disabled}
      />
      <Share width={iconSize} height={iconSize} color={theme.colors.disabled} />
      <Profile
        width={iconSize}
        height={iconSize}
        color={theme.colors.disabled}
      />
    </View>
  );
};

export default withTheme(NavBar);
