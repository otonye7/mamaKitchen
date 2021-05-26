import React, {useState, createContext, useEffect, useContext, useMemo} from 'react';
import {resturantRequest, resturantTransform} from './resturant.service';
import {LocationContext} from '../location/location.context';

export const ResturantContext = createContext();

export const ResturantContextProvider = ({ children }) => {
    const [resturants, setResturants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);
    console.log(LocationContext)
  
    const retrieveResturants = (loc) => {
      setIsLoading(true);
      setResturants([]);
  
      setTimeout(() => {
        resturantRequest(loc)
          .then(resturantTransform)
          .then((results) => {
            setIsLoading(false);
            setResturants(results);
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err);
          });
      }, 2000);
    };
    useEffect(() => {
      if (location) {
        const locationString = `${location.lat},${location.lng}`;
        retrieveResturants(locationString);
      }
    }, [location]);
  
    return (
      <ResturantContext.Provider
        value={{
          resturants,
          isLoading,
          error,
        }}
      >
        {children}
      </ResturantContext.Provider>
    );
  };