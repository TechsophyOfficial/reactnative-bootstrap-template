import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import SelectDropdown from 'react-native-select-dropdown';
import {dip} from '../util/function';
import {Cross} from '../util/icons';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../i18n/i18n';
import {useDrawerStatus} from '@react-navigation/drawer';

const CustomDrawer = props => {
  const drawerStatus = useDrawerStatus();

  const languages = ['EN', 'ES', 'FR'];

  const [language, setLanguage] = useState('');

  const {t} = useTranslation();

  const onDrawerOpen = async () => {
    let lang = await AsyncStorage.getItem('app3');
    console.log('onDrawerOpen', lang);
    setLanguage(lang ?? 'EN');
    i18n.changeLanguage(lang ? lang : 'EN');
  };

  // Trigger the function when the drawer is opened
  useEffect(() => {
    if (drawerStatus === 'open') {
      onDrawerOpen();
    }
  }, [drawerStatus]);

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

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        {/* Custom Drawer Header */}
        <TouchableOpacity
          onPress={() => props?.navigation.closeDrawer()}
          style={{
            position: 'absolute',
            height: dip(50),
            width: dip(50),
            right: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Cross height={dip(20)} width={dip(20)} color={'#000000'} />
        </TouchableOpacity>

        {/* Dropdown for Language Selection */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Select Language:</Text>
          <SelectDropdown
            data={languages}
            defaultValue={language}
            onSelect={(selectedItem, index) => {
              onLanguageChange(selectedItem);
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem) || 'Select your Language'}
                  </Text>
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

        {/* Drawer Items */}
        <View style={styles.menuItem}>
          <Text
            onPress={() => props.navigation.navigate('Home')}
            style={styles.menuItemText}>
            Home
          </Text>
        </View>

        <View style={styles.menuItem}>
          <Text
            onPress={() => props.navigation.navigate('Profile')}
            style={styles.menuItemText}>
            Profile
          </Text>
        </View>

        <View style={styles.menuItem}>
          <Text
            onPress={() => props.navigation.navigate('Settings')}
            style={styles.menuItemText}>
            Settings
          </Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#3b5998',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropdownContainer: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdownButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  dropdownButtonText: {
    fontSize: 16,
    textAlign: 'left',
  },
  menuItem: {
    marginVertical: 10,
  },
  menuItemText: {
    fontSize: 16,
  },
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
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

export default CustomDrawer;
