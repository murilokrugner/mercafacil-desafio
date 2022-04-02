import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Characters from '../../pages/Application/Characters';
import Episodes from '../../pages/Application/Episodes';

const Tab = createBottomTabNavigator();

export default function ApplicationPages() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Personagens') {
              iconName = focused
                ? 'logo-octocat'
                : 'logo-octocat';
            } else if (route.name === 'Episódios') {
              iconName = focused
                ? 'library'
                : 'library-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Personagens" component={Characters} 
          options={{ headerShown: false }} />
          
        <Tab.Screen name="Episódios" component={Episodes} 
          options={{ headerShown: false }} />
      </Tab.Navigator>
  );
}