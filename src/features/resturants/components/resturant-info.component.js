import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';


const ResturantInfo = ({resturants = {}}) => {
    const {
        name = 'Mamas Kitchen',
        icon,
        photos = ['https://www.stlmag.com/downloads/291284/download/0219_Elmwood_0016.jpg?cb=05f56521ae049e15a8f3d244cafb3822&w=1200'],
        address = 'No 12 Admiralty Street off lekki phase 1',
        openingHours= true,
        ratings = 5,
        isClosedTemporarily='null'
    } = resturants
    return(
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Text>{name}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white'
    },
    cover: {
        padding: 20,
        backgroundColor: 'white'
    }
  });
  

export default ResturantInfo;