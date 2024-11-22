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
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [language, setLanguage] = useState('');

  const {t} = useTranslation();

  useEffect(() => {
    setDefaultLanguage();
  }, []);

  const setDefaultLanguage = async () => {
    let lang = await AsyncStorage.getItem('global');
    console.log('onLanguageChange global', lang);
    setLanguage(lang);
    i18n.changeLanguage(lang ? lang : 'EN');
  };

  const onLanguageChange = (lang: any) => {
    console.log('onLanguageChange', lang);
    setLanguage(lang);
    AsyncStorage.setItem('global', lang);
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

  const data = [
    {
      name: 'appOne',
      id: 1,
      navigation: 'AppOne',
      role: 'Practitioner',
    },
    {
      name: 'apptwo',
      id: 2,
      navigation: 'AppTwo',
      role: 'Practitioner',
    },
    {
      name: 'appthree',
      id: 3,
      navigation: 'AppThree',
      // role: 'Patient',
      role: 'Practitioner',
    },
  ];

  const userRole = 'Practitioner'; // Set this value to the role of the logged-in user
  // const userRole = 'Patient';
  // Filter the data based on the user's role
  const filteredData = data.filter(item => item.role === userRole);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, width: '100%'}}>
        <View style={{flex: 1}}>
          <HomeHeader
            onProfilePress={() => console.log('object')}
            handleBack={() => console.log('object')}
            back={false}
            value={language}
            label={t('home')}
            language={true}
            onLanguageChange={(lang: any) => onLanguageChange(lang)}
          />
        </View>
        <View style={{flex: 10, width: '100%'}}>
          <FlatList
            // horizontal={true}
            data={filteredData}
            renderItem={({item}) => (
              <HorizontalListItem
                onPress={() => navigation.push(item?.navigation)}
                item={item}
                theme={theme}
              />
            )}
            keyExtractor={item => item.toString()}
            numColumns={2} // Set number of columns to 2
            columnWrapperStyle={{justifyContent: 'space-between'}} // Space between the items
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
