import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as OvermindProvider } from 'overmind-react'
import { overmind } from './src/overmind'

/* components */
import Main from './src/routes/Main'

export default function App () {
  return (
    <OvermindProvider value={overmind}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </SafeAreaProvider>
    </OvermindProvider>
  )
}

AppRegistry.registerComponent('Elenas App', () => App)
