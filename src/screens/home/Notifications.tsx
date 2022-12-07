import moment from 'moment';
import React, {useState, useCallback} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import Text from '../../components/Text';
import View from '../../components/View';
import useTheme from '../../hooks/useTheme';
import {HomeComposite} from '../../navigation/HomeTabs';
import {DATE_FORMAT} from '../../util/constants';
import {dip} from '../../util/function';
import {Email} from '../../util/icons';
import {LongLipsum, NoticationsHeader} from '../../util/strings';
import {ThemeOverride} from '../../util/theme';

const NotificationItem = ({
  item,
  read,
  toggleRead,
  theme,
}: {
  item: {head: number; text: string; date: string};
  read: boolean;
  toggleRead: () => void;
  theme: ThemeOverride;
}) => {
  const weight = read ? 'bold' : 'normal';
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('press');
        toggleRead();
      }}
      style={{
        alignItems: 'center',
        padding: theme.spacing,
        paddingHorizontal: theme.paddingHorizontal,
        flexDirection: 'row',
      }}>
      <Email width={dip(25)} height={dip(25)} color={theme.colors.text} />
      <View style={{flexDirection: 'column', marginLeft: theme.spacing}}>
        <Text style={{fontWeight: weight, color: theme.colors.text}}>
          {item.head}
        </Text>
        <Text style={{fontWeight: weight, color: theme.colors.disabled}}>
          {item.text}
        </Text>
        <Text style={{fontWeight: '100', color: theme.colors.accent}}>
          {item.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

type Props = HomeComposite<'Notifications'>;

const Notifications = ({navigation}: Props) => {
  const [read, setRead] = useState([3, 4]);
  const [data, setData] = useState([
    {
      head: 1,
      text:
        LongLipsum.substring(
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 60)
        ) + 10,
      date: moment()
        .add(-Math.floor(Math.random() * 60), 'days')
        .format(DATE_FORMAT),
    },
    {
      head: 2,
      text:
        LongLipsum.substring(
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 60)
        ) + 10,
      date: moment()
        .add(-Math.floor(Math.random() * 60), 'days')
        .format(DATE_FORMAT),
    },
    {
      head: 3,
      text:
        LongLipsum.substring(
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 60)
        ) + 10,
      date: moment()
        .add(-Math.floor(Math.random() * 60), 'days')
        .format(DATE_FORMAT),
    },
    {
      head: 4,
      text:
        LongLipsum.substring(
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 60)
        ) + 10,
      date: moment()
        .add(-Math.floor(Math.random() * 60), 'days')
        .format(DATE_FORMAT),
    },
    {
      head: 5,
      text:
        LongLipsum.substring(
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 60)
        ) + 10,
      date: moment()
        .add(-Math.floor(Math.random() * 60), 'days')
        .format(DATE_FORMAT),
    },
  ]);

  const theme = useTheme();

  const readToggle = useCallback(
    (set: number, isRead: boolean) => {
      if (isRead) {
        setRead(read.filter(v => v !== set));
      } else {
        const newVal = [...read, set];
        setRead(newVal);
      }
      console.log(read);
    },
    [setRead, read]
  );

  return (
    <View>
      <ScreenHeader text={NoticationsHeader} navigation={navigation} />
      <FlatList
        data={data}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: StyleSheet.hairlineWidth,
              backgroundColor: theme.colors.divider,
              width: '100%',
            }}
          />
        )}
        renderItem={({item}) => {
          const isRead = read.includes(item.head);
          return (
            <NotificationItem
              item={item}
              read={isRead}
              toggleRead={() => readToggle(item.head, isRead)}
              theme={theme}
            />
          );
        }}
      />
    </View>
  );
};

export default Notifications;
