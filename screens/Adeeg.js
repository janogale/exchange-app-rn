import * as React from 'react';
import {TextInput as InputNative, View, StyleSheet} from 'react-native';
import {TextInput, Card, Title, Button, Paragraph} from 'react-native-paper';
import SendIntentAndroid from 'react-native-send-intent';

// card

function Sarifo({route, navigation}) {
  // money receiver
  const [num, setNum] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [numLength, setNumLength] = React.useState(10);

  // get params
  const {type, isDollar} = route.params;

  React.useEffect(() => {
    // update header
    navigation.setOptions({
      title: `Zaad Services  ${route.params.isDollar ? 'Dollar' : 'Shilling'}`,
    });

    if (type === 'kuiibso') {
      setNumLength(6);
    }

    if (type === 'lacagdirid') {
      setNum('063');
    }
  }, []);

  function sendUSSD() {
    if (!amount) return;
    let USSDCode = '*888#';

    //change . to *
    let newAmount = amount.replace('.', '*');

    // type: lacagdirid
    if (type === 'lacagdirid') {
      USSDCode = isDollar
        ? `*880*${num}*${newAmount}#`
        : `*220*${num}*${newAmount}#`;
    }

    // type: lacagdirid
    if (type === 'kuiibso') {
      USSDCode = isDollar
        ? `*883*${num}*${newAmount}#`
        : `*223*${num}*${newAmount}#`;
    }

    // type: kushubasho
    if (type === 'kushubasho') {
      USSDCode = isDollar
        ? `*881*${num}*${newAmount}#`
        : `*221*${num}*${newAmount}#`;
    }

    // type: labixid
    if (type === 'labixid') {
      USSDCode = isDollar
        ? `*884*${num}*${newAmount}#`
        : `*224*${num}*${newAmount}#`;
    }

    SendIntentAndroid.sendPhoneCall(USSDCode);
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <TextInput
            style={styles.input}
            label="Gali Number-ka"
            value={num}
            onChangeText={(text) => {
              //only allow digits
              if (/^$|^\d+$/.test(text)) {
                setNum(text);
              }
              return;
            }}
            mode="outlined"
            render={(props) => (
              <InputNative
                {...props}
                keyboardType="decimal-pad"
                autoFocus
                maxLength={numLength}
              />
            )}
          />

          <TextInput
            style={styles.input}
            label="Gali Lacagta"
            value={amount}
            onChangeText={(text) => {
              //reject invalid input
              if (!isFinite(text)) return;
              setAmount(text);
            }}
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
            onPress={() => {
              sendUSSD();
            }}>
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
