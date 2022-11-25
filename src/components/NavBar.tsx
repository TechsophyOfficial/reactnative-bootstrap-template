import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-paper';
import {SvgProps} from 'react-native-svg';
import {dip} from '../util/function';
import {Content, Home, Profile, Share} from '../util/icons';
import {ThemeOverride} from '../util/theme';
import Text from './Text';
import View from './View';

const iconSize = dip(26);

const TabItem = ({
  Icon,
  text,
  selected,
  theme,
  onPress,
}: {
  Icon: React.FC<SvgProps>;
  text: string;
  selected: boolean;
  theme: ThemeOverride;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{alignItems: 'center'}}>
      <Icon
        width={iconSize}
        height={iconSize}
        color={selected ? theme.colors.primary : theme.colors.disabled}
      />
      <Text style={{fontSize: dip(11), color: theme.colors.disabled}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const NavBar = (props: BottomTabBarProps & {theme: ThemeOverride}) => {
  const {theme} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        height: dip(70),
        width: '100%',
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: theme.paddingHorizontal,
      }}>
      <TabItem
        Icon={Home}
        text={'Home'}
        selected={props.state.index === 0}
        theme={theme}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
      <TabItem
        Icon={Content}
        text={'Main'}
        selected={props.state.index === 1}
        theme={theme}
        onPress={() => {
          props.navigation.navigate('Main');
        }}
      />
      <TabItem
        Icon={Share}
        text={'Messaging'}
        selected={props.state.index === 2}
        theme={theme}
        onPress={() => {
          props.navigation.navigate('Messaging');
        }}
      />
      <TabItem
        Icon={Profile}
        text={'Profile'}
        selected={props.state.index === 3}
        theme={theme}
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      />
    </View>
  );
};

export default withTheme(NavBar);
