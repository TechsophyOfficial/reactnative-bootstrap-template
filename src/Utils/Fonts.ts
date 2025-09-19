import {create} from 'react-native-pixel-perfect';

import {Dimensions} from 'react-native';

export default {
  PoppinsBold: 'Poppins-Bold',
  PoppinsMedium: 'Poppins-Medium',
  PoppinsBlack: 'Poppins-Black',
  PoppinsBlackItalic: 'Poppins-BlackItalic',
  PoppinsBoldItalic: 'Poppins-BoldItalic',
  PoppinsItalic: 'Poppins-Italic',
  PoppinsLight: 'Poppins-Light',
  PoppinsLightItalic: 'Poppins-LightItalic',
  PoppinsRegular: 'Poppins-Regular',
  PoppinsThin: 'Poppins-Thin',
  PoppinsThinItalic: 'Poppins-ThinItalic',
  LatoBold: 'Lato-Bold',
  LatoRegular: 'Lato-Regular',
  LatoItalic: 'Lato-Italic',
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const DESIGN_WIDTH = 375;
const DEISGN_HEIGHT = 812;

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/**
 * Scale width and height based on the device screen dimensions.
 */
export const scaleWidth = (size: any) => (SCREEN_WIDTH / BASE_WIDTH) * size;
export const scaleHeight = (size: any) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

export const scale = (size: any) =>
  Math.min(scaleWidth(size), scaleHeight(size));

const figma = create({width: DESIGN_WIDTH, height: DEISGN_HEIGHT});
export const dip = (size: number): number => figma(size);

export const range = (start: number, end: number, step: number) => {
  const ret: number[] = [];
  for (let i = start; i < end; i += step) {
    ret.push(i);
  }
  return ret;
};

export const jsonToURLSearch = (obj: {[key: string]: string}) => {
  const params = new URLSearchParams();
  Object.keys(obj).forEach(key => {
    params.append(key, obj[key]);
  });
  return params;
};

const width = (number: number) => {
  const fullWidth = Dimensions.get('window').width;
  if (number >= 100) return fullWidth;
  else if (number <= 0) return 0;
  else return fullWidth * (number / 100);
};
const height = (number: number) => {
  const fullHeight = Dimensions.get('window').height;
  if (number >= 100) return fullHeight;
  else if (number <= 0) return 0;
  else return fullHeight * (number / 100);
};
const fontSize = (number: number) => {
  const font = height(number);
  return font;
};
export {fontSize, height, width};
