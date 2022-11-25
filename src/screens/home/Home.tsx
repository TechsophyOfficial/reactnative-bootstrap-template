import React from 'react';
import SearchBox from '../../components/SearchBox';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {HomeHead} from '../../util/strings';

const Home = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: theme.paddingHorizontal,
        paddingVertical: theme.paddingVertical,
      }}>
      <Text style={{marginBottom: theme.spacing}}>{HomeHead}</Text>
      <SearchBox textInputProps={{}} />
    </View>
  );
};

export default Home;
