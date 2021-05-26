import React, {useState, useEffect} from 'react';
import {locationRequest, locationTransform} from './location.service';

export const LocationContext = React.createContext();

export const LocationContextProvider = ({children}) => {
    const [location, setLocation] = useState('san francisco');
    const [keyword, setKeyword] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword)
        locationRequest(searchKeyword)
        .then(locationTransform)
        .then(result => {
            setIsLoading(false)
            setLocation(result);
            console.log(result)
        })
        .catch(error => {
            setIsLoading(false)
            setError(error)
        })
    };

    useEffect(() => {
        onSearch(keyword)
    }, [])

    return(
        <LocationContext.Provider 
        value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword
        }}> 
            {children}
        </LocationContext.Provider>
    )
}
