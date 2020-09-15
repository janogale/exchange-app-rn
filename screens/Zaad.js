import * as React from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {DataTable, Button, Text} from 'react-native-paper';
// components
//import ListItem from '../components/ListItem';
import Header from '../components/Header';

const ZaadScreen = ({navigation}) => {
  function runAdeeg({
    currency = 'shilling',
    isDollar = false,
    type = 'lacagdirid',
  } = {}) {
    navigation.navigate('Adeeg', {
      type: type,
      currency: currency,
      isDollar: isDollar,
    });
  }

  return (
    <View style={{flex: 1, backgroundColor: '#029c2e'}}>
      <Header title="Zaad Services" navigation={navigation} />
      <View style={localStyle.container}>
        {/* List */}
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={localStyle.cellTitle}>Dollar</Text>
            </DataTable.Title>
            <DataTable.Title numeric>Shilling</DataTable.Title>
          </DataTable.Header>
          <ScrollView style={{marginTop: 10}}>
            <DataTable.Row>
              <DataCell
                text="Lacag Dirid Shilling"
                onClick={() => runAdeeg({})}
              />
              <DataCell
                text="Lacag Dirid Dollar"
                onClick={() => runAdeeg({isDollar: true})}
              />
            </DataTable.Row>
            <DataTable.Row>
              <DataCell
                text="Ku Iibso Shilling"
                onClick={() => console.log('fn')}
              />
              <DataCell
                text="Ku Iibso Dollar"
                onClick={() => console.log('fn')}
              />
            </DataTable.Row>
            <DataTable.Row>
              <DataCell
                text="E-Voucher Shilling"
                onClick={() => console.log('fn')}
              />
              <DataCell
                text="E-Voucher Dollar"
                onClick={() => console.log('fn')}
              />
            </DataTable.Row>
            <DataTable.Row>
              <DataCell text="Show Balance" onClick={() => console.log('fn')} />
              <DataCell text="Show Balance" onClick={() => console.log('fn')} />
            </DataTable.Row>
            <DataTable.Row>
              <DataCell text="Show Balance" onClick={() => console.log('fn')} />
              <DataCell text="Show Balance" onClick={() => console.log('fn')} />
            </DataTable.Row>
          </ScrollView>
        </DataTable>
      </View>
    </View>
  );
};

function DataCell({text, onClick}) {
  return (
    <DataTable.Cell style={localStyle.cell} onPress={() => onClick()}>
      <Text style={localStyle.cell}> {text}</Text>
    </DataTable.Cell>
  );
}

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 25,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    backgroundColor: '#fff',
  },
  cell: {
    color: '#fff',
    fontWeight: 'bold',
    elevation: 10,
    paddingLeft: 10,
    margin: 4,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#029c2e',
  },
  list: {
    elevation: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
  },
  cellTitle: {
    color: '#029c2e',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ZaadScreen;
