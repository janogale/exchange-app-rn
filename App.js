import * as React from 'react';
import {Text, View, PermissionsAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// screens
import HomeScreen from './screens/Home';
import ZaadScreen from './screens/Zaad';
import ContactScreen from './screens/Contact';
import SarifoScreen from './screens/Sarifo';
import AdeegScreen from './screens/Adeeg';

const HomeStack = createStackNavigator();

function HomeNav() {
  // Check Permission

  const requestPhonePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        {
          title: 'Madar Exchange',
          message: 'Si App-kani kugu shaqeeyo faldan Ok Taabo.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the App Now');
      } else {
        console.log('Phone permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  requestPhonePermission();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#029c2e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Sarifo" component={SarifoScreen} />
      <HomeStack.Screen name="Adeeg" component={AdeegScreen} />
    </HomeStack.Navigator>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function BottomNavigationTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      swipeEnabled={true}
      activeColor="#f1f1f1"
      barStyle={{backgroundColor: '#029c2e'}}>
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{
          tabBarLabel: 'Madar',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="autorenew" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Zaad"
        component={ZaadScreen}
        options={{
          tabBarLabel: 'ZAAD Service',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="contacts" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigationTabs />
    </NavigationContainer>
  );
}
