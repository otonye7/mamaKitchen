import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';


const Title = styled.Text `
   padding: ${(props) => props.theme.space[2]};
   color: ${(props) => props.theme.colors.ui.primary}
`;

const ResturantCard = styled(Card) `
  background-color: white;
`;

const ResturantCardCover = styled(Card.Cover) `
  padding: ${(props) => props.theme.space[2]};
  background-color: white;
`;

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
        <ResturantCard elevation={5} >
            <ResturantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </ResturantCard>
    )
}

// const styles = StyleSheet.create({
//     card: {
//       backgroundColor: 'white'
//     },
//     cover: {
//         padding: 20,
//         backgroundColor: 'white'
//     }
//   });
  

export default ResturantInfo;