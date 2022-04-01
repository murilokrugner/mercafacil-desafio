import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Characters from '../../pages/Application/Characters';
import Episodes from '../../pages/Application/Episodes';

const Tab = createBottomTabNavigator();

export default function ApplicationPages() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Characters') {
            iconName = focused ? 'logo-octocat' : 'logo-octocat';
          } else if (route.name === 'Episodes') {
            iconName = focused ? 'library' : 'library-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CCF80',
        tabBarInactiveTintColor: '#44D4A6',
      })}>
      <Tab.Screen
        name="Characters"
        component={Characters}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Episodes"
        component={Episodes}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
