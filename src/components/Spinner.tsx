import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {withTheme} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import {dip} from '../util/function';
import {ChevronDown, ChevronUp} from '../util/icons';
import {theme, ThemeOverride} from '../util/theme';
import Text from './Text';

const Spinner = (
  props: {
    theme: ThemeOverride;
    data: string[];
    onSelect: (text: string) => void;
    label?: string;
    icon?: boolean;
    value?: string;
    buttonStyle?: any;
    containerStyle?: any;
  } & ViewProps
) => {
  const {
    theme,
    data,
    onSelect,
    value,
    label,
    containerStyle,
    buttonStyle,
    icon,
    ...viewProps
  } = props;
  const {style: viewStyle}: any = viewProps;
  return (
    <View style={{marginTop: 10}}>
      <SelectDropdown
        data={data}
        // defaultValue={value}

        onSelect={(selectedItem, index) => {
          onSelect(selectedItem);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View
              style={[styles.dropdownButtonStyle, buttonStyle, containerStyle]}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {/* {(selectedItem && selectedItem) || 'Select your Value'} */}
                {value ?? selectedItem ?? label ?? 'Select Value'}
              </Text>

              {icon ? null : (
                <ChevronDown
                  width={dip(20)}
                  height={dip(20)}
                  color={theme.colors.text}
                  style={{transform: [{rotateZ: isOpened ? '180deg' : '0deg'}]}}
                />
              )}
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && {backgroundColor: '#D2D9DF'}),
              }}>
              <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaaa',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dropdownContainer: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
    // backgroundColor:"red"
  },
  dropdownButtonStyle: {
    // width: '100%',
    // height: 50,
    // backgroundColor: '#E9ECEF',
    // borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 12,

    height: theme.buttonHeight,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.roundness,
    width: '100%',
    paddingHorizontal: theme.spacing,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default withTheme(Spinner);
