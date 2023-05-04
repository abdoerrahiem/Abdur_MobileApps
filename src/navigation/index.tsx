import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import { RootStackParamList } from './types'
import { navigationRef } from './RootNavigation'
import AddProductScreen from '../screens/AddProductScreen'
import UpdateProductScreen from '../screens/UpdateProductScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
        <Stack.Screen
          name="UpdateProductScreen"
          component={UpdateProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
