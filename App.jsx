import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApolloProvider } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'

import { createApolloClient } from './src/utils/apolloClient'
import Main from './src/routes/Main'
/* components */

const client = createApolloClient()

export default function App () {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style='dark' />
          <Main />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('Elenas App', () => App)
