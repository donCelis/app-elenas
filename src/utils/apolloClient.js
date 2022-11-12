import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Constants from 'expo-constants'
import authStorage from './authStorage'

const { apolloUri } = Constants.manifest.extra

const httpLink = createHttpLink({
  uri: apolloUri
})

const authLink = setContext(async (_, { headers }) => {
  const token = await authStorage.getAccessToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `token ${token}` : ''
    }
  }
})

export const createApolloClient = () =>
  new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
