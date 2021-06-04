// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import {Text} from 'react-native';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {theme} from './src/infrastructure/theme'
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Navigation } from "./src/infrastructure/navigation";
import { ResturantContextProvider} from './src/services/resturants/resturant.context';
import { LocationContextProvider} from './src/services/location/location.context';

const Tab = createBottomTabNavigator();

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
      <LocationContextProvider>
      <ResturantContextProvider>
           <Navigation />
      </ResturantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  <ExpoStatusBar style='auto' />
  </>
  );
}

const styles = StyleSheet.create({
 
});

