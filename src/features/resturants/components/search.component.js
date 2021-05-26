import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../../services/location/location.context';


const SearchContainer = styled.View `
  background-color: white;
  padding: 16px;
`;

export const Search = () => {
    const {keyword, search} = useContext(LocationContext);
    const [searchKeyboard, setSearchKeyboard] = useState(keyword);
    return(
      <SearchContainer >
          <Searchbar 
          placeholder='Search for location' 
          value={searchKeyboard}
          onSubmitEditing={() => {
              search(searchKeyboard)
          }}
          onChangeText={(text) => {
              setSearchKeyboard(text)
          }}
          />
      </SearchContainer>
    )
}