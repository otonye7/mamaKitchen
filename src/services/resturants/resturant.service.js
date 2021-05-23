import {mocks} from './mock/index';
import camelize from 'camelize';

export const resturantRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if(!mock) {
            reject('Data not found')
        } else {
            resolve(mock)
        }
    })
         
    
}

export const restaurantTransform = ({results = []}) => {
    const mappedResults = results.map((resturant) => {
        return {
            ...resturant,
            isOpenNow: resturants.opening_hours && resturants.opening_hours.open_now,
            isClosedTemporarily: resturants.business_status ==='CLOSED_TEMPORARILY'
        }
    });
     return camelize(mappedResults);
}


