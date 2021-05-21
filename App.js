// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';



export default function App() {
  return (
    <>
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
    <View style={{padding: 16, backgroundColor: 'green'}}>
       <Text style={{color: 'black'}} >SEARCH</Text>
       <Text style={{color: 'black'}} >SEARCH</Text>
       <Text style={{color: 'black'}} >SEARCH</Text>
       <Text style={{color: 'black'}} >SEARCH</Text>
       <Text style={{color: 'black'}} >SEARCH</Text>
    </View>
     <View style={{padding: 16, flex: 1, backgroundColor:'purple'}}>
     <Text style={{color: 'red'}} >Our react native application</Text>
  </View>
  </SafeAreaView>
  <ExpoStatusBar style='auto' />
  </>
  );
}

const styles = StyleSheet.create({

});
