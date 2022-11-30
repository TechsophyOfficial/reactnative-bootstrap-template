import React, {useMemo} from 'react';
import {FlatList, TextStyle, TouchableOpacity} from 'react-native';
import HorizontalListItem from '../../components/HorizontalListItem';
import SearchBox from '../../components/SearchBox';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {HomeComposite} from '../../navigation/HomeTabs';
import {dip} from '../../util/function';
import {Profile} from '../../util/icons';
import {HomeHead, List1Heading, List2Heading} from '../../util/strings';

type Props = HomeComposite<'Home'>;

const Home = ({navigation}: Props) => {
  const theme = useTheme();

  const style = useMemo<{heading: TextStyle}>(() => {
    return {
      heading: {
        paddingTop: theme.spacing,
        fontWeight: 'bold',
        fontSize: dip(20),
      },
    };
  }, [theme]);

  return (
    <View
      style={{
        paddingTop: theme.paddingVertical,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: theme.spacing,
          alignItems: 'center',
          paddingHorizontal: theme.paddingHorizontal,
        }}>
        <Text style={{fontSize: dip(20), fontWeight: 'bold'}}>{HomeHead}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileTab');
          }}>
          <Profile width={dip(25)} height={dip(25)} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: theme.paddingHorizontal}}>
        <SearchBox textInputProps={{}} />
        <Text style={style.heading}>{List1Heading}</Text>
      </View>
      <FlatList
        horizontal={true}
        data={[0, 1, 2, 4, 5, 6, 7]}
        contentContainerStyle={{marginTop: theme.spacing}}
        renderItem={({item}) => {
          return <HorizontalListItem item={item} onPress={() => {}} />;
        }}
        style={{paddingHorizontal: theme.paddingHorizontal}}
        snapToInterval={dip(130) + theme.spacing}
      />
      <View style={{paddingHorizontal: theme.paddingHorizontal}}>
        <Text style={style.heading}>{List2Heading}</Text>
      </View>
      <FlatList
        horizontal={true}
        data={[0, 1, 2, 4, 5, 6, 7, 8, 9, 10]}
        contentContainerStyle={{marginTop: theme.spacing}}
        renderItem={({item}) => {
          return <HorizontalListItem item={item} />;
        }}
        style={{paddingHorizontal: theme.paddingHorizontal}}
        snapToInterval={dip(130) + theme.spacing}
      />
    </View>
  );
};

export default Home;
