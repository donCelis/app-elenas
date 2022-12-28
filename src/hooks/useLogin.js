import { useMutation, useApolloClient } from '@apollo/client'
// import { LOGIN_MUTATION } from '../graphql/mutations'
import { setAccessToken } from '../utils/authStorage'
import fakeToken from '../utils/fakeTokenGenerator'

export const useLogin = () => {
  // const [loginMutation] = useMutation(LOGIN_MUTATION)
  const apolloClient = useApolloClient()

  const logIn = async (data) => {
    /* const { data: { login } } = await loginMutation({
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
    } */
    const token = fakeToken()
    await setAccessToken(token)
    await apolloClient.resetStore()
  }

  return {
    logIn
  }
}
