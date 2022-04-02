import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ApplicationPages from '../ApplicationPages';
import ViewCharacter from '../../pages/Application/Characters/ViewCharacter';
import ViewEpisode from '../../pages/Application/Episodes/ViewEpisode';

import theme from '../../global/styles/colors';

const Stack = createStackNavigator()

export default function ApplicationStackPages() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: theme.colors.primary},
          }}
          initialRouteName='ApplicationPages'
         >
          <Stack.Screen
            name='ApplicationPages'
            component={ApplicationPages}
            options={{
              headerShown: false,
              headerBackTitle: '',
            }}
          />
          <Stack.Screen
            name='ViewCharacter'
            component={ViewCharacter}
            options={{
              headerShown: true,
              headerBackTitle: 'Voltar',
              headerTitle: 'Informações do Personagem',
              headerTintColor: theme.colors.textInput,
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
            }}
          />
          <Stack.Screen
            name='ViewEpisode'
            component={ViewEpisode}
            options={{
              headerShown: true,
              headerBackTitle: 'Voltar',
              headerTitle: 'Informações do Episódio',
              headerTintColor: theme.colors.textInput,
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
            }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }