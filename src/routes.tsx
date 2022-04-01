import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationPages from './router/ApplicationPages';

export default function Routes() {
  return (
    <NavigationContainer independent>
      <ApplicationPages />
    </NavigationContainer>
  );
}