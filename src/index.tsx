import 'react-native-gesture-handler';
import {StatusBar, LogBox} from 'react-native';
import React from 'react';

import {ThemeProvider} from 'styled-components';

import colors from './global/styles/colors';

import App from './App';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const index: React.FC = () => {
  return (
      <ThemeProvider theme={colors}>        
        <StatusBar barStyle="dark-content" backgroundColor={colors.statusBar} />
        <App />
      </ThemeProvider>
  );
}

export default index;