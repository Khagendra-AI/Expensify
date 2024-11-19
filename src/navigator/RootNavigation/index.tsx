
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Icon } from '../../assets';
import Home from '../../screens/Home';
import Funds from '../../screens/Funds';
import Expense from '../../screens/Expense';
import Details from '../../screens/Details';


const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
          },
          headerShown: false, 
          tabBarActiveTintColor: '#1E90FF', 
          tabBarInactiveTintColor: 'gray', 
        }}>
        <Tab.Screen name="Home" component={Home}  
        options={{
          
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Icon.home} 
              style={[styles.icon, { tintColor: color, width: size, height: size }]} 
            />
          ),
        }}
        />
        <Tab.Screen name="Details" component={Details} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Icon.exchange}
              style={[styles.icon, { tintColor: color, width: size, height: size }]} 
            />
          ),
        }}/>
        <Tab.Screen name="Funds" component={Funds}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Icon.funds} 
              style={[styles.icon, { tintColor: color, width: size, height: size }]} 
            />
          ),
        }} />
        <Tab.Screen name="Expense" component={Expense} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={Icon.expense} 
              style={[styles.icon, { tintColor: color, width: size, height: size }]} 
            />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 25, 
    height: 25, 
  },
});