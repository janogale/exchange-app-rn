import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { Divider, Title, Paragraph} from 'react-native-paper';
// components
import ListItem from '../components/ListItem';
import Header from '../components/Header';

var width = Dimensions.get('window').width;

const ContactScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#029c2e'}}>
      <Header title="Madar Contact" navigation={navigation} />
      <View style={localStyle.container}>
        <View style={{width: width * 0.8}}>
          <Title style={localStyle.title}>Mahadsanid Macmiil</Title>
          <Paragraph>Fadlan lagala soo xidhiidh Macluumadka hoose</Paragraph>
          <Divider style={{marginBottom: 20}} />
          <ListItem
            title="Telesom"
            description="063-4455224"
            icon="cellphone-android"
            code="063-4455224"
          />
          <ListItem
            title="Somtel"
            description="065-4455224"
            icon="phone"
            code="065-4455224"
          />
          <ListItem title="WhatsApp" icon="whatsapp" code="999" />
          <ListItem title="Facebook" icon="facebook" code="999" />
        </View>
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    backgroundColor: '#fff',
  },

  list: {
    elevation: 10,
    backgroundColor: '#fff',
    marginTop: 8,
    borderRadius: 10,
  },
  title: {
    color: '#029c2e',
    textAlign: 'center',
  },
});

export default ContactScreen;
