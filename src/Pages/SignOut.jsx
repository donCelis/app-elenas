import { useNavigation, StackActions } from '@react-navigation/native'
import { useApolloClient } from '@apollo/client'

import { PATH_AUTH } from '../routes/paths.js'
import authStorage from '../utils/authStorage.js'
import Button from '../components/common/Button.jsx'

export default function SignOut () {
  const apolloClient = useApolloClient()
  const { dispatch } = useNavigation()
  const { replace } = StackActions

  /* fake signOut */
  async function signOut () {
    dispatch(replace(PATH_AUTH.signin))
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
  }

  return (
    <Button title='Sign Out' onPress={signOut} />
  )
}
