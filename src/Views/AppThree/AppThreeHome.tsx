import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import HomeHeader from '../../Components/HomeHeader';
import {theme} from '../../util/theme';
import HorizontalListItem from '../../Components/HorizontalListItem';
import SearchBox from '../../Components/SearchBox';
import {List1Heading, List2Heading} from '../../util/strings';
import {dip} from '../../util/function';
import useTheme from '../../hooks/useTheme';
import ListItem from '../../Components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../i18n/i18n';
import {useTranslation} from 'react-i18next';

const AppThreeHome = ({navigation}: any) => {
  const [language, setLanguage] = useState('');

  const {t} = useTranslation();

  useEffect(() => {
    setDefaultLanguage();
  }, []);

  const setDefaultLanguage = async () => {
    let lang = await AsyncStorage.getItem('app3');
    setLanguage(lang ?? 'EN');
    i18n.changeLanguage(lang ? lang : 'EN');
  };

  const onLanguageChange = (lang: any) => {
    setLanguage(lang);
    AsyncStorage.setItem('app3', lang);
    i18n.changeLanguage(lang);
  };

  const theme = useTheme();

  const style = useMemo<{heading: TextStyle}>(() => {
    return {
      heading: {
        paddingTop: theme.spacing,
        fontWeight: 'bold',
        fontSize: dip(20),
      },
    };
  }, [theme]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, width: '100%'}}>
        <View style={{flex: 1}}>
          <HomeHeader
            onProfilePress={() => console.log('object')}
            handleBack={() => navigation?.push('Home')}
            back={true}
            value={language}
            label={t('appthree')}
            language={true}
            onLanguageChange={(lang: any) => onLanguageChange(lang)}
          />
        </View>
        <View style={{flex: 10}}>
          <View style={{paddingHorizontal: theme.paddingHorizontal}}>
            <SearchBox label={t('search')} textInputProps={{}} />
            <Text style={style.heading}>{t('somefeautredItems')}</Text>
          </View>
          <FlatList
            horizontal={true}
            data={[0, 1, 2, 4, 5, 6, 7]}
            contentContainerStyle={{marginTop: theme.spacing}}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 10}}>
                  <ListItem
                    item={item}
                    onPress={() => {
                      navigation.navigate('Product');
                    }}
                  />
                </View>
              );
            }}
            style={{paddingHorizontal: theme.paddingHorizontal}}
            snapToInterval={dip(130) + theme.spacing}
          />
          <View style={{paddingHorizontal: theme.paddingHorizontal}}>
            <Text style={style.heading}>{t('favorites')}</Text>
          </View>
          <FlatList
            horizontal={true}
            data={[0, 1, 2, 4, 5, 6, 7]}
            contentContainerStyle={{marginTop: theme.spacing}}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 10}}>
                  <ListItem
                    item={item}
                    onPress={() => {
                      navigation.navigate('Product');
                    }}
                  />
                </View>
              );
            }}
            style={{paddingHorizontal: theme.paddingHorizontal}}
            snapToInterval={dip(130) + theme.spacing}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppThreeHome;

const styles = StyleSheet.create({});
