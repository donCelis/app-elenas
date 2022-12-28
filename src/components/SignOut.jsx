import { useNavigation, StackActions } from '@react-navigation/native'
import { useApolloClient } from '@apollo/client'

import { PATH_AUTH } from '../routes/paths'
import { removeAccessToken } from '../utils/authStorage'
import Button from '../components/common/Button'

export default function SignOut () {
  const apolloClient = useApolloClient()
  const { dispatch } = useNavigation()
  const { replace } = StackActions

  const signOut = async () => {
    try {
      await apolloClient.resetStore()
      await removeAccessToken()
      dispatch(replace(PATH_AUTH.signIn))
    } catch (error) {
      console.log(error)
    }
  }

  return <Button title='Sign Out' onPress={signOut} />
}
