import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApolloProvider } from '@apollo/client'

import { createApolloClient } from './src/utils/apolloClient'
/* components */
import Main from './src/components/Main'

const client = createApolloClient()

export default function App () {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('Elenas App', () => App)
