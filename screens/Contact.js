import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Linking,
  Alert,
  Share,
} from 'react-native';
import {Divider, Title, Paragraph} from 'react-native-paper';
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
            code="0634455224"
          />

          <ListItem title="WhatsApp" icon="whatsapp" fn={openWhatsappUrl} />
          <ListItem title="Facebook" icon="facebook" fn={openURL} />
          <ListItem title="Share App with Friends" icon="share" fn={appShare} />
        </View>
      </View>
    </View>
  );
};

function openWhatsappUrl() {
  const url = 'whatsapp://send?phone=252634750008';
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert('Alert', 'WhatsApp is not installed');
    }
  });
}

function openURL(
  url = 'https://www.facebook.com/151900699036469?referrer=whatsapp',
) {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
}

function appShare() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please install Madar Exchange App , AppLink :https://play.google.com/store/apps/details?id=com.bigiltech.madar',
        url:
          'https://play.google.com/store/apps/details?id=com.bigiltech.madar',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  onShare();
}

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
