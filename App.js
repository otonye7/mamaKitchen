// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import {Text} from 'react-native';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {theme} from './src/infrastructure/theme'
import ResturantScreen from './src/features/resturants/screens/resturant.screen';
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeArea} from './src/components/utilities/safe-area.component';
import {Ionicons} from '@expo/vector-icons';
import { ResturantContextProvider} from './src/services/resturants/resturant.context';
import { LocationContextProvider, locationContextProvider} from './src/services/location/location.context';

const Tab = createBottomTabNavigator();

const Setting = () => (
 <SafeArea>
    <Text>Hey Monkey</Text>
  </SafeArea> 
)

const Map = () => (
  <SafeArea>
    <Text>Hey Monkey where is my fucking banana</Text>
  </SafeArea> 
)

export default function App() {

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  let [latoLoaded] = useLato({
    Lato_400Regular
  })

  if(!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
      <ResturantContextProvider>
      <NavigationContainer>
        <Tab.Navigator
           screenOptions={({route}) => ({
             tabBarIcon: ({color, size}) => {
               let iconName;

               if(route.name === 'Resturants') {
                 iconName = 'md-restaurant';
               } else if (route.name === 'Settings') {
                 iconName = 'md-settings';
               } else if (route.name === 'Map') {
                  iconName = 'md-map'
               }
               return <Ionicons name={iconName} size={size} color={color}/>
             }
           })}
           tabBarOptions={{
             activeTintColor: 'tomato',
             inactiveTintColor: 'gray'
           }}
        
        >
          <Tab.Screen name='Resturants' component={ResturantScreen} />
          <Tab.Screen name='Map' component={Map} />
          <Tab.Screen name='Settings' component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
      </ResturantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  <ExpoStatusBar style='auto' />
  </>
  );
}

const styles = StyleSheet.create({
 
});

