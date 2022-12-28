import { SafeAreaView, StyleSheet } from 'react-native'
// import { useQuery } from '@apollo/client'
// import { GET_PROFILE } from '../overmind/effects/graphql/queries'

import Profile from '../components/Profile'
import SignOut from '../components/SignOut'
import LoadingModal from '../components/common/Modal'

export default function ProfilePage () {
  // const { data = {}, loading } = useQuery(GET_PROFILE, { })

  const user = {}

  return (
    <SafeAreaView style={styles.container}>
      {/* {loading && <LoadingModal />}
      {!loading && (
        <Profile {...user}>
          <SignOut />
        </Profile>
      )} */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
