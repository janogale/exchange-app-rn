import * as React from 'react';
import {TextInput as InputNative, View, StyleSheet} from 'react-native';
import {TextInput, Card, Title, Button, Paragraph} from 'react-native-paper';
import SendIntentAndroid from 'react-native-send-intent';

// card

function Sarifo({route, navigation}) {
  const [amount, setAmount] = React.useState('');

  React.useEffect(() => {
    console.log(amount);
    // update header
    navigation.setOptions({
      title: route.params.isDollar ? 'Sarifo Dollar' : 'Sarifo Shilling',
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
            label="Gali Lacagta"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            mode="outlined"
            render={(props) => (
              <InputNative {...props} keyboardType="numeric" />
            )}
          />

          <Button
            style={styles.btn}
            labelStyle={styles.btnText}
            icon="currency-usd"
            mode="contained"
            onPress={() => sendUSSD(USSDCode)}>
            Sarifo
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
