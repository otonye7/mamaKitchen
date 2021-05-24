import React, {useContext} from 'react';
import {Searchbar} from 'react-native-paper';
import ResturantInfo from '../components/resturant-info.component';
import styled from 'styled-components/native';
import { FlatList, SafeAreaView, StatusBar} from 'react-native';
import {SafeArea} from '../../../components/utilities/safe-area.component';
import {ResturantContext} from '../../../services/resturants/resturant.context';

const SearchContainer = styled.View `
  background-color: white;
  padding: 16px;
`;

const ResturantListContainer = styled.View `
   padding: 16px;
`;


const ResturantScreen = () => {
   const {isLoading, error, resturants} = useContext(ResturantContext);
  
  return (
    <SafeArea >
    <SearchContainer >
       <Searchbar />
    </SearchContainer>
    <FlatList 
       data={resturants}
       renderItem={({item}) => {
         
          return (
               <ResturantInfo resturant={item}/>
             
          )
       }}
       keyExtractor={(item) => item.name}
       contentContainerStyle={{padding:16}}
    />
  </SafeArea>
  )
    
}

  

export default ResturantScreen;