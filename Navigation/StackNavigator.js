import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Component/HomeScreen';
import ArrayScreen from '../Component/ArrayScreen';

import linkedlist from '../Component/LinkedList.js';



const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Array" component={ArrayScreen} />
      <Stack.Screen name="Linklist" component={linkedlist} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})