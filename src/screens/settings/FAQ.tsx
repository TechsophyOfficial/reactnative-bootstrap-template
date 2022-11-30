import React from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import Text from '../../components/Text';
import View from '../../components/View';
import {ProfileComposite} from '../../navigation/ProfileStack';
import {FAQHeader} from '../../util/strings';

type Props = ProfileComposite<'FAQ'>;

const FAQ = ({navigation}: Props) => {
  return (
    <View>
      <ScreenHeader text={FAQHeader} navigation={navigation} />
      <Text>FAQ</Text>
    </View>
  );
};

export default FAQ;
