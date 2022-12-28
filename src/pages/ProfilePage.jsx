import { SafeAreaView, StyleSheet } from 'react-native'

import Profile from '../components/Profile'
import SignOut from '../components/SignOut'
// import LoadingModal from '../components/common/Modal'
import { useAppState } from '../overmind'

export default function ProfilePage () {
  const { admin } = useAppState()
  const user = admin.data

  return (
    <SafeAreaView style={styles.container}>
      {/* {loading && <LoadingModal />}
      {!loading && (
        <Profile {...user}>
          <SignOut />
        </Profile>
      )} */}
      <Profile {...user}>
        <SignOut />
      </Profile>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
