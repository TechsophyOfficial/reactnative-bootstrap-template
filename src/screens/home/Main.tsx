import React from 'react';
import {FlatList} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ListItem from '../../components/ListItem';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {HomeComposite} from '../../navigation/HomeTabs';
import {dip} from '../../util/function';

type Props = HomeComposite<'Main'>;

const Main = ({navigation}: Props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        paddingHorizontal: theme.paddingHorizontal,
        paddingVertical: theme.paddingVertical,
      }}>
      <Text style={{fontSize: dip(22), fontWeight: 'bold'}}>Main</Text>

      <FlatList
        ListFooterComponent={
          <View
            style={{
              backgroundColor: 'transparent',
              height: hp(10),
            }}
          />
        }
        data={[0, 1, 2, 4, 5, 6, 7]}
        contentContainerStyle={{marginTop: theme.spacing}}
        renderItem={({item}) => {
          return (
            <ListItem
              item={item}
              onPress={() => {
                navigation.navigate('Product');
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Main;
