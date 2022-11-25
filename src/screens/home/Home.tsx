import React, {useMemo} from 'react';
import {FlatList, TextStyle} from 'react-native';
import HorizontalListItem from '../../components/HorizontalListItem';
import SearchBox from '../../components/SearchBox';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {dip} from '../../util/function';
import {HomeHead, List1Heading, List2Heading} from '../../util/strings';

const Home = () => {
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
        paddingHorizontal: theme.paddingHorizontal,
        paddingTop: theme.paddingVertical,
      }}>
      <Text style={{marginBottom: theme.spacing}}>{HomeHead}</Text>
      <SearchBox textInputProps={{}} />
      <Text style={style.heading}>{List1Heading}</Text>
      <FlatList
        horizontal={true}
        data={[0, 1, 2, 4, 5, 6, 7]}
        contentContainerStyle={{marginTop: theme.spacing}}
        renderItem={({item}) => {
          return <HorizontalListItem item={item} />;
        }}
        snapToInterval={dip(130) + theme.spacing}
      />
      <Text style={style.heading}>{List2Heading}</Text>
      <FlatList
        horizontal={true}
        data={[0, 1, 2, 4, 5, 6, 7, 8, 9, 10]}
        contentContainerStyle={{marginTop: theme.spacing}}
        renderItem={({item}) => {
          return <HorizontalListItem item={item} />;
        }}
        snapToInterval={dip(130) + theme.spacing}
      />
    </View>
  );
};

export default Home;
