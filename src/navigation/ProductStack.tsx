import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import Product from '../screens/product/Product';
import {MainStackParam} from './MainStack';

export type ProductStackParam = {
  ProductPage: undefined;
};

export type ProductComposite<T extends keyof ProductStackParam> =
  CompositeScreenProps<
    BottomTabScreenProps<ProductStackParam, T>,
    NativeStackScreenProps<MainStackParam>
  >;

const ProductStackNav = createNativeStackNavigator<ProductStackParam>();

const ProductStack = () => {
  return (
    <ProductStackNav.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProductPage">
      <ProductStackNav.Screen name="ProductPage" component={Product} />
    </ProductStackNav.Navigator>
  );
};

export default ProductStack;
