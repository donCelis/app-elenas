import { StyleSheet, View } from 'react-native'
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'

import { GET_PROFILE } from '../graphql/queries'
import { theme } from '../theme'

/* Components */
import Profile from '../components/Profile'

export default function UserDetail () {
  const { params: { screen } } = useRoute()
  const NumberId = Number(screen)

  const { data = {} } = useQuery(GET_PROFILE, {
    variables: {
      ids: NumberId
    }
  })

  const user = data?.clientsSearch?.results[0] || {}

  return (
    <View style={styles.container}>
      <Profile {...user} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.whitePure,
    flex: 1
  }
})
