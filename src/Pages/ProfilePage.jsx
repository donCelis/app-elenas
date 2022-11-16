import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_PROFILE } from '../graphql/queries'

import Profile from '../components/Profile'

export default function ProfilePage () {
  const { data = {} } = useQuery(GET_PROFILE, { })

  const user = data?.profile || {}

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* <Profile {...user} /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
})
