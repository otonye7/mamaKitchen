import React, {useState, createContext, useEffect, useMemo} from 'react';
import {resturantRequest, restaurantTransform} from './resturant.service';

export const ResturantContext = createContext();

export const ResturantContextProvider = ({children}) => {
    return (
        <ResturantContext.Provider value={{resturants: [1,2,3]}}>
            {children}
        </ResturantContext.Provider>
    )
}