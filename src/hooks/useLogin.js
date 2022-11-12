import { useMutation, useApolloClient } from '@apollo/client'
import { LOGIN_MUTATION } from '../graphql/mutations.js'
import authStorage from '../utils/authStorage.js'

export const useLogin = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION)
  const apolloClient = useApolloClient()

  const logIn = async ({ cellphone, password }) => {
    const { data } = await loginMutation({
      variables: {
        cellphone,
        password,
        exuseExpirationPolicy: true
      }
    })

    await authStorage.setAccessToken(data.login.token)
    await apolloClient.resetStore()
  }

  return {
    logIn
  }
}
