import { useNavigation, StackActions } from '@react-navigation/native'
import { useApolloClient } from '@apollo/client'

import { PATH_AUTH } from '../routes/paths.js'
import { removeAccessToken } from '../utils/authStorage.js'
import Button from '../components/common/Button.jsx'

export default function SignOut () {
  const apolloClient = useApolloClient()
  const { dispatch } = useNavigation()
  const { replace } = StackActions

  const signOut = async () => {
    try {
      await removeAccessToken()
      await apolloClient.resetStore()
    } catch (error) {
      console.trace(error)
    } finally {
      dispatch(replace(PATH_AUTH.signIn))
    }
  }

  return <Button title='Sign Out' onPress={signOut} />
}
