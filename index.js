/**
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#029c2e',
    accent: '#f1c40f',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#029c2e" />
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
