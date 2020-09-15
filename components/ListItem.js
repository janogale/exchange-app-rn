import * as React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

import SendIntentAndroid from 'react-native-send-intent';

export default function ListItem({
  title,
  description,
  code = '',
  icon,
  fn = null,
}) {
  return (
    <List.Item
      style={localStyle.list}
      titleStyle={localStyle.listTitle}
      title={title}
      description={description}
      left={(props) => <List.Icon {...props} icon={icon} color="#029c2e" />}
      onPress={() => {
        if (fn) {
          fn();
          return;
        }
        SendIntentAndroid.sendPhoneCall(code);
      }}
    />
  );
}

const localStyle = StyleSheet.create({
  list: {
    elevation: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
  },
  listTitle: {
    color: '#029c2e',
    fontWeight: 'bold',
  },
});
