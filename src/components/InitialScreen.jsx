import { useEffect } from 'react'
import { View } from 'react-native'
import { StackActions, useNavigation } from '@react-navigation/native'
import TextMd from './common/TextMd'

import { PATH_AUTH, PATH_PAGE } from '../routes/paths'
import { getAccessToken } from '../utils/authStorage'

export default function InitialScreen () {
  const { dispatch } = useNavigation()
  const { replace } = StackActions

  useEffect(() => {
    getAccessToken().then((token) => {
      if (token) dispatch(replace(PATH_PAGE.home))
      if (!token) dispatch(replace(PATH_AUTH.signIn))
    })
  }, [])

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <TextMd>Elenas</TextMd>
    </View>
  )
}
