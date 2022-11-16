import { StyleSheet, SafeAreaView } from 'react-native'
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'

import { GET_SINGLE_USER } from '../graphql/queries'

/* Components */
import Profile from '../components/Profile'

export default function UserDetail () {
  const { params: { screen } } = useRoute()
  const NumberId = Number(screen)

  const { data = {} } = useQuery(GET_SINGLE_USER, {
    variables: {
      ids: NumberId
    }
  })

  const user = data?.clientsSearch?.results[0] || {}

  return (
    <SafeAreaView style={styles.container}>
      <Profile {...user} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
