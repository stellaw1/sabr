import * as React from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BusinessHomeScreen from "./screens/BusinessHomeScreen";
import LoginScreen from "./screens/LoginScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import DinerHomeScreen from "./screens/DinerHomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BusinessHome" component={BusinessHomeScreen} />
        <Stack.Screen name="DinerHome" component={DinerHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

