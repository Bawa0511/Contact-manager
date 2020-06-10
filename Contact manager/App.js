import React from 'react';

import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          headerStyle: {backgroundColor: "#B83227"},
          headerTitleStyle: {color: "white"},
          headerTintColor: "yellow"
        }}
        />
        <Stack.Screen name="AddNewContactScreen" component={AddNewContactScreen} 
        options={{
          headerStyle: {backgroundColor: "#B83227"},
          headerTitleStyle: {color: "white"},
          headerTintColor: "yellow"
        }}
        />
        <Stack.Screen name="EditContactScreen" component={EditContactScreen} 
        options={{
          headerStyle: {backgroundColor: "#B83227"},
          headerTitleStyle: {color: "white"},
          headerTintColor: "yellow"
        }}
        />
        <Stack.Screen name="ViewContactScreen" component={ViewContactScreen} 
        options={{
          headerStyle: {backgroundColor: "#B83227"},
          headerTitleStyle: {color: "white"},
          headerTintColor: "yellow"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
