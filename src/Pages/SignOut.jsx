import { useEffect } from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'

import { PATH_AUTH } from '../routes/paths.js'

export default function SignOut () {
  const { dispatch } = useNavigation()
  const { replace } = StackActions

  /* fake signOut */
  function signOut () {
    dispatch(replace(PATH_AUTH.signin))
  }
  useEffect(() => {
    signOut()
  }, [])

  return null
}
