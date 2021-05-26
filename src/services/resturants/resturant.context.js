import React, {useState, createContext, useEffect, useMemo} from 'react';
import {resturantRequest, restaurantTransform} from './resturant.service';

export const ResturantContext = createContext();

export const ResturantContextProvider = ({children}) => {
    const [resturants, setResturants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveResturants = () => {
        setIsLoading(true);
        setTimeout(() => {
            resturantRequest()
            .then(restaurantTransform)
            .then((results) => {
                setIsLoading(false);
                setResturants(results);
                
            })
        }) 
    }

    useEffect(() => {
       retrieveResturants()
    }, [])

    return (
        <ResturantContext.Provider 
        value={{
            resturants,
            isLoading,
            error
            }}
            >
            {children}
        </ResturantContext.Provider>
    )
}