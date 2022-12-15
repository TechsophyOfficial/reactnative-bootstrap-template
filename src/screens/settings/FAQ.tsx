import React from 'react';
import {ScrollView} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {ProfileComposite} from '../../navigation/ProfileStack';
import {dip} from '../../util/function';
import {FAQHeader, LongLipsum} from '../../util/strings';

type Props = ProfileComposite<'FAQ'>;

const type = 'FAQ';

const FAQ = ({navigation}: Props) => {
  const theme = useTheme();
  return (
    <View style={{}}>
      <ScreenHeader text={type} navigation={navigation} />
      <ScrollView style={{paddingHorizontal: theme.paddingHorizontal}}>
        <Text
          style={{
            fontSize: dip(25),
            fontWeight: 'bold',
            marginBottom: theme.spacing,
          }}>
          {type}
        </Text>
        <Text
          style={{
            fontSize: dip(16),
            textAlign: 'justify',
            color: theme.colors.disabled,
          }}>
          {LongLipsum}
        </Text>
      </ScrollView>
    </View>
  );
};

export default FAQ;
