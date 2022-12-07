import React from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {ProductComposite} from '../../navigation/ProductStack';

type Props = ProductComposite<'ProductPage'>;

const Product = ({navigation}: Props) => {
  const theme = useTheme();
  return (
    <View>
      <ScreenHeader text={'Product Page'} navigation={navigation} />
      <View style={{paddingHorizontal: theme.paddingHorizontal}}>
        <Text>Product Page</Text>
      </View>
    </View>
  );
};

export default Product;
