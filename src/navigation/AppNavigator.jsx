import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import NewsScreen from "../screens/NewsScreen";
import LocationScreen from "../screens/LocationScreen";

const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
