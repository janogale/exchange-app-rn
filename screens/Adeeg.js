import * as React from 'react';
import {TextInput as InputNative, View, StyleSheet} from 'react-native';
import {TextInput, Card, Title, Button, Paragraph} from 'react-native-paper';
import SendIntentAndroid from 'react-native-send-intent';

// card

function Sarifo({route, navigation}) {
  // money receiver
  const [num, setNum] = React.useState('063');
  const [amount, setAmount] = React.useState('');

  React.useEffect(() => {
    // update header
    navigation.setOptions({
      title: `Zaad Services  ${route.params.isDollar ? 'Dollar' : 'Shilling'}`,
    });
  }, []);

  let USSDCode = route.params.isDollar
    ? `*377*331114*${amount}#`
    : `*277*331114*${amount}#`;

  function sendUSSD(code) {
    if (!amount) return;
    SendIntentAndroid.sendPhoneCall(code);
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <TextInput
            style={styles.input}
            label="Gali Mobile-ka"
            value={num}
            onChangeText={(text) => setNum(text)}
            mode="outlined"
            render={(props) => (
              <InputNative
                {...props}
                keyboardType="decimal-pad"
                autoFocus
                maxLength={10}
              />
            )}
          />

          <TextInput
            style={styles.input}
            label="Gali Lacagta"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            mode="outlined"
            render={(props) => (
              <InputNative {...props} maxLength={6} keyboardType="numeric" />
            )}
          />

          <Button
            style={styles.btn}
            labelStyle={styles.btnText}
            icon="currency-usd"
            mode="contained"
            onPress={() => sendUSSD(USSDCode)}>
            Send
          </Button>
        </Card.Content>
      </Card>
      <Card style={{marginTop: 35, elevation: 15, padding: 20}}>
        <Paragraph>
          Macmiil waad ku Mahadsantahay isticmaalka Adeega Sarifka ee Madar
          Exchange
        </Paragraph>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },

  input: {
    marginBottom: 40,
  },
  btn: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Sarifo;