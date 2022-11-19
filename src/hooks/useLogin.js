import { useMutation, useApolloClient } from '@apollo/client'
import { LOGIN_MUTATION } from '../graphql/mutations.js'
import { setAccessToken } from '../utils/authStorage.js'

export const useLogin = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION)
  const apolloClient = useApolloClient()

  const logIn = async (data) => {
    const { data: { login } } = await loginMutation({
      variables: {
        ...data,
        exuseExpirationPolicy: true
      }
    })

    if (login?.errors) {
      return login?.errors
    } else {
      await setAccessToken(login.token)
      await apolloClient.resetStore()
    }
  }

  return {
    logIn
  }
}
