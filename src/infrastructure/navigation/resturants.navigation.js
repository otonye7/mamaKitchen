import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ResturantsScreen from "../../features/restaurant/screens/resturant.screen";

const ResturantStack = createStackNavigator();

const ResturantsNavigator = () => {
    return (
        <ResturantStack.Navigator>
             <ResturantStack.Screen 
               name="Resturants"
               component={ResturantsScreen}
             />
        </ResturantStack.Navigator>
    )
}

export default ResturantsNavigator;