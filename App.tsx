import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {ThemeProvider} from 'styled-components'
import theme from './src/global/styles/theme'

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';

import {Register} from './src/screens/Register';
import {CategorySelect} from './src/screens/CategorySelect';


import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CategorySelect/>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
