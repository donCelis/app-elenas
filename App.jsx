import { AppRegistry } from 'react-native'
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from './src/utils/apolloClient'

/* components */
import Main from './src/components/Main'

const client = createApolloClient()

export default function App () {
  return (
    <ApolloProvider client={client}>
      <StatusBar style='dark' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('Elenas App', () => App)
