import {mocks} from './mock/index';
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

resturantRequest().then((results) => {
    console.log(results)
}).catch((err) => {
    console.log(err)
});
