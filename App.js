// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {theme} from './src/infrastructure/theme'
import ResturantScreen from './src/features/resturants/screens/resturant.screen';
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'



export default function App() {

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  let [latoLoaded] = useLato({
    Lato_400Regular
  })

  if(!latoLoaded || !oswaldLoaded) {
    return null;
  }

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

