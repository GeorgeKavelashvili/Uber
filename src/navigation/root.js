import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
function RootNavigator() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

export default RootNavigator;
