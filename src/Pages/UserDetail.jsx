import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'

import { GET_PROFILE } from '../graphql/queries'

/* Components */
import Profile from '../components/Profile'

export default function UserDetail () {
  const {
    params: { screen }
  } = useRoute()
  const NumberId = Number(screen)

  const { data = {} } = useQuery(GET_PROFILE, {
    variables: {
      ids: NumberId
    }
  })

  const user = data?.clientsSearch?.results[0] || {}

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Profile {...user} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
})
