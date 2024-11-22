import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setModuleLanguage} from '../Redux/reducers/LanguageSlice';

const Module1Settings = () => {
  const dispatch = useDispatch();

  const changeLanguage = (language: string) => {
    dispatch(setModuleLanguage({module: 'module1', language}));
  };

  return (
    <>
      <Button title="Set English" onPress={() => changeLanguage('en')} />
      <Button title="Set French" onPress={() => changeLanguage('fr')} />
    </>
  );
};

export default Module1Settings;
