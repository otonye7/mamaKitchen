import camelize from 'camelize';
import {location} from './location.mock';

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const locationMock = location[searchTerm]
        if(!locationMock) {
            reject('not found')
        } else {
            resolve(locationMock)
        }
    })
}

export const locationTransform = (result) => {
    const {geometry = {}} = camelize(result.results)[0];
    const {lat, lng} = geometry.location;

    return {lat, lng};
}