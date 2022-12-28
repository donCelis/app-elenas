import { StyleSheet, SafeAreaView } from 'react-native'

/* Components */
import Profile from '../components/Profile'
import { PATH_PAGE } from '../routes/paths'
import Button from '../components/common/Button'
import LoadingModal from '../components/common/Modal'

export default function UserDetail ({ route, navigation: { navigate } }) {
  const NumberId = Number(route?.params.screen)

  const user = {}

  const handleEdit = () => {
    navigate(PATH_PAGE.update, { ...user })
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* {loading && <LoadingModal />}
      {!loading && (
        <Profile isEdit {...user}>
          <Button title='Edit' onPress={handleEdit} />
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
