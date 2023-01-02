import { useNavigation, StackActions } from '@react-navigation/native'

import { PATH_AUTH } from '../routes/paths.js'
import { removeAccessToken } from '../utils/authStorage.js'
import Button from '../components/common/Button.jsx'
import { useActions } from '../overmind'

export default function SignOut () {
  const { dispatch } = useNavigation()
  const { replace } = StackActions
  const { users: { clearUsers } } = useActions()

  const signOut = async () => {
    try {
      await removeAccessToken()
      clearUsers()
      dispatch(replace(PATH_AUTH.signIn))
    } catch (error) {
      console.log(error)
    }
  }

  return <Button title='Sign Out' onPress={signOut} />
}
