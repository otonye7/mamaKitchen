import React from 'react';
import {Searchbar} from 'react-native-paper';
import ResturantInfo from '../components/resturant-info.component';
import styled from 'styled-components/native';
import { FlatList, SafeAreaView, StatusBar} from 'react-native';

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
    <FlatList 
       data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}]}
       renderItem={() => <ResturantInfo />}
       keyExtractor={(item) => item.name}
       contentContainerStyle={{padding:16}}
    />
     {/* <ResturantListContainer>
        <ResturantInfo />
     </ResturantListContainer> */}
  </SafeAreaView>
  )
    
}

  

export default ResturantScreen;