import 'react-native-gesture-handler';
import React from 'react';
import GlobalStyleContext from './context/GlobalStyleContext';
import {StatusBar, LogBox} from 'react-native';
import colors from './global/styles/colors';

import App from './App';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const index: React.FC = () => {
  return (
      <GlobalStyleContext.Provider 
        value={{colors: colors}}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.statusBar} />
        <App />
      </GlobalStyleContext.Provider>
  );
}

export default index;