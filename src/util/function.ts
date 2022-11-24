import {create} from 'react-native-pixel-perfect';

const DESIGN_WIDTH = 375;
const DEISGN_HEIGHT = 812;

const figma = create({width: DESIGN_WIDTH, height: DEISGN_HEIGHT});
export const dip = (size: number): number => figma(size);

export const range = (start: number, end: number, step: number) => {
  let ret: number[] = [];
  for (let i = start; i < end; i += step) {
    ret.push(i);
  }
  return ret;
};
