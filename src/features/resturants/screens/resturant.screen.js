import React, {useContext} from 'react';
import {View} from 'react-native';
import ResturantInfo from '../components/resturant-info.component';
import styled from 'styled-components/native';
import { FlatList} from 'react-native';
import {SafeArea} from '../../../components/utilities/safe-area.component';
import {ResturantContext} from '../../../services/resturants/resturant.context';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {Search} from'../components/search.component';

const ResturantListContainer = styled.View `
   padding: 16px;
`;


const ResturantScreen = () => {
   const {isLoading, error, resturants} = useContext(ResturantContext);
  
  return (
    <SafeArea >
       {
          isLoading 
          && (
          <View style={{position: 'absolute', top: '50%', left: '50%'}}>
             <ActivityIndicator
             size={50}
             style={{marginLeft: -25}}
             animating={true}
             color={Colors.blue300}
             />
          </View>
          )}
         <Search />
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