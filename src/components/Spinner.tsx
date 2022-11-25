import React from 'react';
import {ViewProps} from 'react-native';
import {withTheme} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import {dip} from '../util/function';
import {ChevronDown} from '../util/icons';
import {ThemeOverride} from '../util/theme';
import Text from './Text';

const Spinner = (
  props: {
    theme: ThemeOverride;
    data: string[];
    onSelect: (text: string) => void;
  } & ViewProps
) => {
  const {theme, data, onSelect, ...viewProps} = props;
  const {style: viewStyle}: any = viewProps;
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, _index) => {
        onSelect(selectedItem);
      }}
      buttonTextAfterSelection={(item, _index) => {
        return item;
      }}
      rowTextForSelection={(item, _index) => {
        return item;
      }}
      renderDropdownIcon={isOpened => (
        <ChevronDown
          width={dip(20)}
          height={dip(20)}
          color={theme.colors.text}
          style={{transform: [{rotateZ: isOpened ? '180deg' : '0deg'}]}}
        />
      )}
      buttonStyle={{
        ...viewStyle,
        height: theme.buttonHeight,
        backgroundColor: theme.colors.surface,
        borderRadius: theme.roundness,
        width: '100%',
        paddingHorizontal: theme.spacing,
      }}
      renderCustomizedButtonChild={(selectedItem, _index) => {
        return (
          <Text style={{fontSize: dip(16)}}>
            {selectedItem ?? 'Select Value'}
          </Text>
        );
      }}
      buttonTextStyle={{textAlign: 'left'}}
    />
  );
};

export default withTheme(Spinner);
