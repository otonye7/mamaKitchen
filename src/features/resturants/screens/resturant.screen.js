import React from 'react';
import {Searchbar} from 'react-native-paper';
import ResturantInfo from '../components/resturant-info.component';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

const SafeArea = styled(SafeAreaView) `
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  //it means if status bar has a value hence the && then add a margin-top of StatusBar.currentHeight
`

const SearchContainer = styled.View `
  background-color: white;
  padding: 16px;
`;

const ResturantListContainer = styled.View `
   padding: 16px;
`;


const ResturantScreen = () => {
  return (
    <SafeAreaView >
    <SearchContainer >
       <Searchbar />
    </SearchContainer>
     <ResturantListContainer>
        <ResturantInfo />
     </ResturantListContainer>
  </SafeAreaView>
  )
    
}

  

export default ResturantScreen;