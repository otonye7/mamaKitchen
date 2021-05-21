// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {theme} from './src/infrastructure/theme'
import ResturantScreen from './src/features/resturants/screens/resturant.screen';



export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <ResturantScreen />
    </ThemeProvider>
  <ExpoStatusBar style='auto' />
  </>
  );
}

const styles = StyleSheet.create({
 
});

