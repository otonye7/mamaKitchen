import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';


const Title = styled.Text `
   font-family: ${(props) => props.theme.fonts.heading};
   font-size: ${(props) => props.theme.fontSizes.body};
   padding: ${(props) => props.theme.space[2]};
   color: ${(props) => props.theme.colors.ui.primary};
`;


const Address = styled.Text `
   font-family: ${(props) => props.theme.fonts.body};
   font-size: ${(props) => props.theme.fontSizes.caption};
   padding: ${(props) => props.theme.space[2]};
`;

const ResturantCard = styled(Card) `
  background-color: white;
`;

const ResturantCardCover = styled(Card.Cover) `
  padding: ${(props) => props.theme.space[2]};
  background-color: white;
`;

const Info = styled.View `
   padding: ${(props) => props.theme.space[2]};
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
            <Info>
                <Title>{name}</Title>
                <SvgXml xml={star} width={20} height={20}/>
                <Address>{address}</Address>
            </Info>
          
        </ResturantCard>
    )
}

  

export default ResturantInfo;