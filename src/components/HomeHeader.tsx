import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Spinner from './Spinner';
import {theme} from '../util/theme';
import {dip} from '../util/function';
import Fonts from '../util/Fonts';
import {ChevronLeft, Profile} from '../util/icons';

interface HomeHeaderProps {
  onLanguageChange: (language: string) => void;
  value: string;
  handleBack: () => void;
  onProfilePress: () => void;
  back?: boolean;
  label?: string;
  language?: boolean;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  onLanguageChange,
  value,
  handleBack,
  onProfilePress,
  back,
  label,
  language,
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        {back ? (
          <TouchableOpacity
            onPress={handleBack}
            style={{
              height: dip(50),
              width: dip(50),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ChevronLeft height={dip(25)} width={dip(20)} color={'#000000'} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{flex: 7, flexDirection: 'row'}}>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text numberOfLines={1} ellipsizeMode="middle" style={styles.label}>
            {label}
          </Text>
        </View>
        {language ? (
          <View style={{flex: 1}}>
            <Spinner
              buttonStyle={{
                height: dip(40),
                backgroundColor: 'transparent',
                borderRadius: theme.roundness,
                width: '100%',
                borderBottomWidth: 2,
                borderBottomColor: '#000000',
              }}
              containerStyle={{height: dip(40), width: '100%'}}
              icon={true}
              value={value}
              style={{marginTop: theme.spacing}}
              data={['EN', 'FR', 'ES']}
              label="Language"
              onSelect={(selectedLanguage: string) => {
                onLanguageChange(selectedLanguage);
              }}
            />
          </View>
        ) : null}
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={onProfilePress}
          style={{
            height: dip(50),
            width: dip(50),
            borderRadius: dip(50),
            backgroundColor: '#cccccc',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Profile height={dip(30)} width={dip(30)} color={'#000000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  label: {
    fontSize: dip(20),
    fontFamily: Fonts.OpenSansBold,
    color: '#000',
  },
});
