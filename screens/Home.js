import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Avatar, Title, Button} from 'react-native-paper';

import SendIntentAndroid from 'react-native-send-intent';

import styles from '../styles';

// card
import Card from './Card';
import Header from '../components/Header';

const Home = ({navigation}) => {
  // home component
  function sarifoDollar() {
    navigation.navigate('Sarifo', {
      isDollar: true,
      currency: 'dollar',
    });
  }

  function sarifShilling() {
    navigation.navigate('Sarifo', {
      isDollar: false,
      currency: 'Shilling',
    });
  }
  return (
    <View style={{flex: 1, backgroundColor: '#029c2e'}}>
      <Header title="Madar Exchange" navigation={navigation} />
      <View
        style={{
          flex: 1,
          paddingTop: 15,
          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
          backgroundColor: '#fff',
        }}>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={sarifoDollar}>
            <Card style={styles.card} navigation={navigation}>
              <View>
                <Title style={styles.cardTitle}>Zaad Dollar</Title>
                <Button
                  style={{borderRadius: 10}}
                  labelStyle={{fontSize: 10}}
                  icon="currency-usd-circle-outline"
                  mode="contained"
                  onPress={sarifoDollar}>
                  Sarifo Dollar
                </Button>
              </View>

              <Avatar.Image
                style={styles.cardImage}
                d
                size={80}
                source={require('../img/dollar.jpg')}
              />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={sarifShilling}>
            <Card style={styles.card}>
              <View>
                <Title style={styles.cardTitle}>Zaad Shilling</Title>
                <Button
                  style={{borderRadius: 10}}
                  labelStyle={{fontSize: 10}}
                  icon="currency-usd-circle-outline"
                  mode="contained"
                  onPress={sarifShilling}>
                  Sarifo Shilling
                </Button>
              </View>
              <Avatar.Image
                style={styles.cardImage}
                size={80}
                source={require('../img/lacag.webp')}
              />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => SendIntentAndroid.sendPhoneCall('991', false)}>
            <Avatar.Icon size={48} icon="phone" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
