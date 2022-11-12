import { ApolloClient, InMemoryCache } from '@apollo/client'

export const createApolloClient = () =>
  new ApolloClient({
    uri: 'http://192.168.0.5:4000/',
    cache: new InMemoryCache()
  })
