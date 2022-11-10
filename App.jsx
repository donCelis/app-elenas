import { AppRegistry } from 'react-native'
import { NativeRouter } from 'react-router-native'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'
import Main from './src/components/Main'

const client = new ApolloClient({
  uri: 'https://feat-custom-trace-fb-monitoring.dev.elenas.la/gql/',
  cache: new InMemoryCache()
})

export default function App () {
  return (
    <ApolloProvider client={client}>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('My App', () => App)
