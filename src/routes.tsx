import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationStackPages from './router/ApplicationStackPages';

export default function Routes() {
  return (
    <NavigationContainer independent={true}>
      <ApplicationStackPages />
    </NavigationContainer>
  );
}