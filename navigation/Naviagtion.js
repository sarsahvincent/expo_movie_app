/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          options={({route}) => ({
            headerShown: false,
            title: route.params.item.title,
          })}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
