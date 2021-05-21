// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { StyleSheet } from 'react-native';
import ResturantScreen from './src/features/resturants/screens/resturant.screen';



export default function App() {
  return (
    <>
   <ResturantScreen />
  <ExpoStatusBar style='auto' />
  </>
  );
}

const styles = StyleSheet.create({
 
});

