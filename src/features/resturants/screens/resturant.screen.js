import React from 'react';
import {Searchbar} from 'react-native-paper';
import ResturantInfo from '../components/resturant-info.component';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';


const ResturantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
       <Searchbar />
    </View>
     <View style={styles.list}>
        <ResturantInfo />
     </View>
  </SafeAreaView>
  )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight
    },
    search: {
      backgroundColor: 'white',
      padding: 16
    },
    list: {
      padding: 16,
      flex: 1
    }
  });
  

export default ResturantScreen;