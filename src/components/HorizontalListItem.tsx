import moment from 'moment';
import React, {useMemo, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-paper';
import {dip} from '../util/function';
import {HeartFill, HeartOutline} from '../util/icons';
import {ThemeOverride} from '../util/theme';
import Text from './Text';
import View from './View';

const HorizontalListItem = ({
  theme,
  item,
}: {
  theme: ThemeOverride;
  item: number;
}) => {
  const random = useMemo(() => Math.random(), []);
  const [fav, setFav] = useState(false);
  return (
    <View
      style={{
        backgroundColor: theme.colors.surface,
        borderRadius: theme.roundness,
        marginRight: theme.spacing,
        padding: theme.spacing / 2,
        flexDirection: 'column',
        height: dip(210),
      }}>
      <View style={{overflow: 'hidden', borderRadius: theme.roundness}}>
        <Image
          source={
            random < 0.3
              ? require('../../assets/img/square1.jpg')
              : random > 0.7
              ? require('../../assets/img/square2.jpg')
              : require('../../assets/img/square3.jpg')
          }
          style={{
            height: dip(130) - theme.spacing,
            width: dip(130) - theme.spacing,
          }}
        />
      </View>
      <View style={{marginVertical: theme.spacing}}>
        <Text>{item}</Text>
        <Text>{moment().format('DD-MM-YYYY')}</Text>
        <Text>{(random * 200.0).toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: theme.spacing,
          right: theme.spacing,
        }}
        onPress={() => {
          setFav(!fav);
        }}>
        {fav ? (
          <HeartFill
            width={dip(18)}
            height={dip(18)}
            color={theme.colors.error}
          />
        ) : (
          <HeartOutline
            width={dip(18)}
            height={dip(18)}
            color={theme.colors.disabled}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default withTheme(HorizontalListItem);
