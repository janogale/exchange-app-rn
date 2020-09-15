import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar, Title} from 'react-native-paper';

export default function Header({navigation, title}) {
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
    <View style={{...styles.headerContainer}}>
      <Title style={styles.headerTitle}>{title}</Title>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => sarifoDollar()}>
          <Avatar.Image source={require('../img/dollar.jpg')} />
          <Title style={styles.headerSubTitle}>Dolar</Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sarifShilling()}>
          <Avatar.Image source={require('../img/lacag.webp')} />
          <Title style={styles.headerSubTitle}>Shilling</Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Zaad')}>
          <Avatar.Image source={require('../img/zaad.jpeg')} />
          <Title style={styles.headerSubTitle}>Zaad Services</Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Avatar.Image source={require('../img/madar.png')} />
          <Title style={styles.headerSubTitle}>Contact</Title>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#029c2e',
    paddingBottom: 20,
    paddingTop: 5,
  },
  header: {
    marginTop: 6,
    marginBottom: 3,
  },
  headerTitle: {
    paddingBottom: 12,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerSubTitle: {
    paddingBottom: 12,
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
  },
});
