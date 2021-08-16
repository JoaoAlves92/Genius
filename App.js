import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home';
import Game from './src/views/Game';
import Perdeu from './src/views/Perdeu';

const Stack = createStackNavigator()

export default App => {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
        name="Home"
        component={Home}
        />
        <Stack.Screen
        name="Game"
        component={Game}
        />
        <Stack.Screen
        name="Perdeu"
        component={Perdeu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}