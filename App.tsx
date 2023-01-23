import React from 'react';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as OvermindProvider} from 'overmind-react';
import {overmind} from './src/overmind';

import {name as appName} from './app.json';

/* components */
import Main from './src/routes/Main';

export default function App(): JSX.Element {
  return (
    <OvermindProvider value={overmind}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </SafeAreaProvider>
    </OvermindProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
