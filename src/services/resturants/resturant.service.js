import {mocks, mockImages} from './mock/index';
import camelize from 'camelize';

export const resturantRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject('Data not found')
        } else {
            resolve(mock)
        }
    })
         
    
}

export const resturantTransform = ({results = []}) => {
    const mappedResults = results.map((resturant) => {
        resturant.photos = resturant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
          });
        return {
            ...resturant,
            address: resturant.vicinity,
            isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now,
            isClosedTemporarily: resturant.business_status ==='CLOSED_TEMPORARILY'
        }
    });
     return camelize(mappedResults);
}


