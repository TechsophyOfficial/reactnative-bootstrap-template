import AsyncStorage from '@react-native-async-storage/async-storage';

export const setSessionStorageItem = (key: string, value: string): void => {
  AsyncStorage.setItem(key, value);
};

export const removeSessionStorageItem = (key: string): void => {
  AsyncStorage.removeItem(key);
};

export const getSessionStorageItem = async (key: string) => {
  const encryptedValue = await AsyncStorage.getItem(key);
  if (encryptedValue) {
    return encryptedValue;
  }
  return null;
};
